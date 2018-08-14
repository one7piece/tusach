'use strict';

/**
 * @ngdoc service
 * @name tusachangApp.LoginService
 * @description
 * # LoginService
 * Service in the tusachangApp.
 */
angular.module('tusachangApp')
	.service('LoginService', ['$rootScope', '$window', '$http', '$base64', function ($rootScope, $window, $http, $base64) {
			// AngularJS will instantiate a singleton by calling "new" on this function
			var self = this;
			var SESSION_ID = "tusach.session";
			self.saveSession = function (session) {
				console.log("saveSession:", session);
				if (session) {
					self.session = session;
				} else {
					self.session = {};
				}
				self.isLogin = (self.session.Token && self.session.Token.length > 0);
				if (self.isLogin) {
					console.log("save session data: [" + angular.fromJson(self.session) + "]");
					$window.sessionStorage.setItem(SESSION_ID, JSON.stringify(self.session, null, " "));
				} else {
					$window.sessionStorage.removeItem(SESSION_ID);
				}
			};

			var savedData = $window.sessionStorage.getItem(SESSION_ID);
			console.log("LoginService instantiated, retrieved session data: ", savedData);
			if (savedData) {
				try {
					self.session = JSON.parse(savedData);
				} catch (err) {
					console.log("Error retrieving saved session", err);
					self.saveSession();
				}
			} else {
				self.session = {};
			}
			self.isLogin = (self.session.Token && self.session.Token.length > 0);

			self.getLogonUser = function() {
				if (self.isLogin) {
	        return {name: self.session.Username, role: self.session.Roles[0]};
	      } else {
	        return {name: "", role: ""};
	      }
			};

			self.getToken = function() {
				if (self.isLogin) {
					return self.session.Token;
				} else {
					return "";
				}
			}

			self.doLogin = function (username, password, callback) {
				console.log("doLogin - urlPrefix:" + urlPrefix);
				self.isLogin = false;
				self.session = {};
				var authstr = "Authorization " + $base64.encode(unescape(encodeURIComponent(username + ":" + password)));
				var config = {headers: {'Authorization': authstr}};
				console.log("header config: ", config);
				$http.post(urlPrefix + '/api/login', "", config)
					.then(function success(response) {
						var errorMsg = "";
						console.log("success response:", response);
						if (response.status == 200 && response.data) {
							console.log("success login:", response.data);
							self.saveSession(response.data);
							// emit login event
							$rootScope.$emit('authentication', 'login');
						} else {
							self.saveSession();
							errorMsg = "Error logging in to server: " + response.status;
							if (response.data) {
								errorMsg = response.data;
							}
							console.log("error login, status:" + response.status + ", msg:" + errorMsg);
						}
						if (callback) {
							callback(self.session.Token != "", errorMsg);
						}
					})
					.catch(function error(response) {
						console.log("error login: ", response);
						if (callback) {
							var errorMsg = "Error logging in to server: " + response.status;
							callback(false, errorMsg);
						}
					});
			};

			self.doLogout = function (callback) {
				$http.post(urlPrefix + '/api/logout', "")
					.then(function success(response) {
						console.log("success logout, status:", response);
						if (callback) {
							if (response.data) {
								callback(response.status == 200);
							} else {
								callback(false, "Failed to logout, status=" + response.status);
							}
						}
					})
					.catch(function error(response) {
						console.log("error logout, status:", response);
						if (callback) {
							callback(false, "Failed to logout, status=" + response.status);
						}
					});
				self.saveSession();
				// emit logout event
				$rootScope.$emit('authentication', 'logout');
			};

		}]);
