'use strict';

/**
 * @ngdoc service
 * @name tusachangApp.LoginService
 * @description
 * # LoginService
 * Service in the tusachangApp.
 */
angular.module('tusachangApp')
	.service('LoginService', ['$rootScope', '$cookies', '$http', function ($rootScope, $cookies, $http) {
			// AngularJS will instantiate a singleton by calling "new" on this function
			var self = this;

			$rootScope.logonUser = {name: "", role:"", sessionId: ""};

			var sessionId = $cookies.get('tusachangApp.sessionid');
			if (sessionId != undefined && sessionId != null && sessionId != "") {
				$rootScope.logonUser.sessionId = sessionId;
			}
			// validate the session id with server
			$rootScope.isLogin = false;
			console.log("login-service - isLogin:" + $rootScope.isLogin
				+ ", sessionId:" + $rootScope.logonUser.sessionId);

			self.doValidateSession = function(callback) {
				var header = {headers: {'Content-Type': 'application/json'}};
				$http.get(urlPrefix + '/api/user/' + $rootScope.logonUser.sessionId, header)
					.success(function (data, status) {
						console.log("doValidateSession, status:" + status + ", ",  data);
						if (status == 200 && data && data.sessionId && data.sessionId != "") {
							$rootScope.logonUser = data;
							$rootScope.isLogin = true;
						}
						self.updateCookie($rootScope.isLogin);
						// emit login event
						$rootScope.$emit('authentication');
						if (callback) {
							callback(status == 200, status);
						}
					})
					.error(function (data, status) {
						self.updateCookie(false);
						// emit login event
						$rootScope.$emit('authentication');
						if (callback) {
							callback(false, status);
						}
					});
			};

			if ($rootScope.logonUser.sessionId != "") {
				self.doValidateSession(null);
			}

			self.doLogin = function (username, password, callback) {
				console.log("doLogin - urlPrefix:" + urlPrefix);
				var body = {name: username, password: password};
				var header = {headers: {'Content-Type': 'application/json'}};
				$rootScope.isLogin = false;
				$rootScope.logonUser.sessionId = "";
				$rootScope.logonUser.name = "";

				$http.post(urlPrefix + '/api/login', body, header)
					.success(function (data, status) {
						var errorMsg = "";
						if (status == 200 && data && data.sessionId && data.sessionId != "") {
							console.log("success login, status:" + status + ", data:", data);
							$rootScope.logonUser = data;
							$rootScope.isLogin = true;
							// emit login event
							$rootScope.$emit('authentication');
						} else {
							errorMsg = "Error logging in to server: " + status;
							if (data) {
								errorMsg = data.status;
							}
							console.log("error login, status:" + status + ", msg:" + errorMsg);
						}
						callback($rootScope.isLogin, errorMsg);
						self.updateCookie($rootScope.isLogin);
					})
					.error(function (data, status) {
						console.log("error login, status:" + status + ", data:", data);
						var errorMsg = "Error logging in to server: " + status;
						callback(false, errorMsg);
						self.updateCookie(false);
					});
			};

			self.doLogout = function (callback) {
				self.updateCookie(false);

				var header = {headers: {'Content-Type': 'application/json'}};
				$http.post(urlPrefix + '/api/logout/' + $rootScope.logonUser.sessionId, header)
					.success(function (data, status) {
						console.log("success logout, status:" + status);
						if (callback) {
							if (data) {
								callback(status == 200, data.status);
							} else {
								callback(false, "Failed to logout, status=" + status);
							}
						}
					})
					.error(function (data, status) {
						console.log("error logout, status:" + status);
						if (callback) {
							callback(false, "Failed to logout, status=" + status);
						}
					});

				// emit logout event
				$rootScope.$emit('authentication', 'logout');
			};

			self.updateCookie = function (isLogin) {
				if (isLogin) {
					// set expire in 30 minutes
					var expireDate = new Date();
					var expirePeriod = 60 * 60 * 1000;
					expireDate.setDate(expireDate.getTime() + expirePeriod);
					$cookies.put('tusachangApp.sessionid', $rootScope.logonUser.sessionId, {expires: expireDate});
				} else {
					$cookies.remove('tusachangApp.sessionid');
					$rootScope.logonUser.sessionId = "";
					$rootScope.logonUser.name = "";
					$rootScope.isLogin = false;
				}
			};

		}]);
