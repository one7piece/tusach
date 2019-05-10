package main

import (
	"flag"
	_ "net/http/pprof"
	"os"
	"sync"

	"dv.com.tusach/logger"
	"dv.com.tusach/maker"
	"dv.com.tusach/persistence"
	"dv.com.tusach/server/grpc"
	"dv.com.tusach/server/rest"
	"dv.com.tusach/util"
)

func main() {
	var logLevel string
	var logFile string
	var configFile string
	flag.StringVar(&configFile, "configFile", "", "Configuration file name")
	flag.StringVar(&logLevel, "logLevel", "info", "logLevel")
	flag.StringVar(&logFile, "logFile", "", "logFile")
	flag.Parse()

	if configFile == "" {
		logger.Error("GOWebserver - ERROR! missing parameter: configFile")
		os.Exit(1)
	}

	// load configuration
	util.LoadConfig(configFile)
	logger.Infof("loaded configuration: %+v", util.GetConfiguration())

	db := persistence.FileDB{}
	db.InitDB()
	bookMaker := maker.NewBookMaker(&db)

	restApp := rest.RestServer{}
	grpcApp := grpc.GrpcServer{}
	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		defer wg.Done()
		err := restApp.Start(bookMaker)
		if err != nil {
			logger.Errorf("Failed to start REST server: %s", err)
			os.Exit(1)
		}
	}()

	go func() {
		defer wg.Done()
		err := grpcApp.Start(bookMaker)
		if err != nil {
			logger.Errorf("Failed to start GRPC server: %s", err)
			os.Exit(1)
		}
	}()

	wg.Wait()
}
