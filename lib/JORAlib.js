
JORA_APP.service('httpService', function($rootScope, $http) {
delete $http.defaults.headers.common['X-Requested-With'];
    
    //Simple GET Request - parameters: url / callback function
    //with Error Handling
    this.getRequest = function(myUrl, callback) {
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);

            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }

        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };

    //Simple POST Request - parameters: url / callback function
    //with Error Handling
    this.postRequest = function(myUrl, data, callback) {
        $http({
            method : 'POST',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            data : data,
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");                    
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }

        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };

    this.getExecute = function(requestID, selectStatement, callback) {
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=execute&requestID=" + requestID + "&statement="+encodeURIComponent(selectStatement);
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    this.getFetch = function(requestID, next, start, callback) {
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=fetch&requestID=" + requestID + "&next="+next + "&start=" + start;
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    this.getExecuteAndFetch = function(requestID, selectStatement, next, callback) {
        //if next=-1 than fetch all
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=execute_and_fetch&requestID=" + requestID + "&statement="+encodeURIComponent(selectStatement) + "&next=" + next;
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };

    this.postExecute = function(requestID, selectStatement, callback) {
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=execute&requestID=" + requestID;
        $http({
            method : 'POST',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            data : selectStatement,
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");                    
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }

        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    this.postFetch = function(requestID, next, start, callback) {
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=fetch&requestID=" + requestID + "&next="+next + "&start=" + start;
        $http({
            method : 'POST',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    
    this.postExecuteAndFetch = function(requestID, selectStatement, next, callback) {
        //if next=-1 than fetch all
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=execute_and_fetch&requestID=" + requestID + "&next=" + next;
        $http({
            method : 'POST',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            data : selectStatement,
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };

    this.getLanguages = function(languageNr, callback) {
       var myUrl = requestprefix + "?&function=language_table&langID=" + languageNr + "&db=" + getItem("database").toUpperCase();
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };

    this.getDownloadBlob = function(table, column, where, callback) {
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=download_blob&table="+ table +"&column="+ column +"&where=" + where;
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    this.readPiece = function(size, codec, callback) {
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=read_piece&len=" + size + "&codec="+codec;
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            callback(json);
            
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    //Translate Function - parameters: requestID, list with all words, languageID and callback
    this.translate = function(requestID, list, languageNr, callback) {
        var i;
        var words = "";
        for (i=0;i<list.length;i++){
            words += "'" + list[i] + "',";
        }
        words = words.substring(0,words.length - 1);
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=translate&requestID=" + requestID+"&db="+getItem("database").toUpperCase()+"&langID="+languageNr;
        $http({
            method : 'POST',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            data : encodeURIComponent(words),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    
    this.getPrepare = function(requestID, statement, callback) {
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=prepare&requestID=" + requestID + "&statement=" + encodeURIComponent(statement);
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    this.getSetvar = function(requestID, name, type, mode, value, callback) {
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=setvar&requestID=" + requestID + "&name="+ name +"&type="+ type + "&mode="+ mode + "&value="+value;
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    this.getExecutePreparedGetAll = function(requestID, callback) {
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=execute_prepared_getall&requestID=" + requestID;
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    
    
    this.setTimeOut = function(time, callback) {
        var myUrl = "/JORA/LogicalLogin?function=set_timeout&timeout="+time;
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            callback(json);
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };

    

    //Login - Login request to server and response automatically interpreted
    this.login = function(user, password) {
        var myUrl = requestprefix + "?&function=login&user="+user+"&pwd="+password+"&db=" + localStorage.getItem("database").toUpperCase();
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
             // console.debug("data:", json);
             // console.debug("status:", status);
             // console.debug("config:", config);

            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    sessionId = json[1].SessionID;
                    localStorage.setItem("sessionID", json[1].SessionID);
                    localStorage.setItem("user", 'guardus');
                }
            } else {
                setLamp("red");
            }

        }).error(function(data, status, headers, config) {
            console.log("LOGIN ERROR")
            console.debug(data);
            console.debug(status)
            setLamp("red");
        });
    }
    
    
    //Log Out - Log Out request to server and redirect to Login page automatically
    this.logOut = function() {
        var myUrl = requestprefix + ";jsessionid=" + sessionId + "?&function=logoff";
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
                localStorage.setItem("sessionID", '');
                localStorage.setItem("user", '');
                localStorage.setItem("workplaceID", '');
                sessionId = '';
                username = '';
                window.location = "../login/index.html"; 
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    }
    
    this.getLoadJar = function(jarName,callback) {
        var myUrl = requestprefix + "?&function=load_jar&file="+jarName;
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);

            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    console.debug(json);
                    callback(json);
                }
            } else {
                setLamp("red");
            }

        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    this.getDynamicMethod = function(requestID, className,method,args,callback) {
        if (args!=null){
            var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=dynamic_method&requestID=" + requestID +"&class="+ className + "&method="+ method +"&args="+args;    
        }else{
            var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=dynamic_method&requestID=" + requestID +"&class="+ className + "&method="+ method;
        }
        
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);

            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }

        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    this.getWorkplaceApps = function(username, callback) {
        var myUrl = requestprefix + "?&function=workplace_apps&username="+username;
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);

            if (json != undefined && json != "") {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection' || json[1].Info == 'cannot find session id') {
                        goToLogin();
                    }
                } else {
                    console.debug(json);
                    callback(json);
                }
            } else {
                setLamp("red");
                goToLogin();
            }

        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    this.installAllApps = function(callback) {
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=install_apps";
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    this.getInstallContent = function(callback) {
        var myUrl = requestprefix + ";?&function=get_install_content";
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            // console.debug("data:", json);
            // console.debug("status:", status);
            // console.debug("config:", config);
            if (json != undefined) {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
    
    this.getInstalledApps = function(callback) {
        if (getItem("database")==null){
            goToLogin();
        }
        var myUrl = requestprefix + ";jsessionid=" + getItem("sessionID") + "?&function=list_apps&db="+getItem("database").toUpperCase();
        $http({
            method : 'GET',
            url : myUrl + "&rand=" + Math.round(Math.random() * 10000),
            cache : false
        }).success(function(json, status, headers, config) {
            console.debug("data:", json);
            console.debug("status:", status);
            console.debug("config:", config);
            
            if (json != undefined  && json != '') {
                if (json[0].Status != 'OK' || json == undefined) {
                    setLamp("red");
                    console.log("Status returned: " + json[0].Status);
                    console.log(json)
                    if (json[1].Info == 'session invalid' || json[1].Info == 'cannot find login request to clone the connection') {
                        goToLogin();
                    }
                } else {
                    callback(json);
                }
            } else {
                setLamp("red");
            }
        }).error(function(data, status, headers, config) {
            setLamp("gray");
        });
    };
});

function setLamp(color) {
    switch (color) {
        case "red":
            document.getElementById('lamp').style.background = '#FF0000';
            setItem("lamp","red");
            break;
        case "yellow":
            document.getElementById('lamp').style.background = '#FFFF00';
            setItem("lamp","yellow");
            break;
        case "green":
            document.getElementById('lamp').style.background = '#00FF00';
            setItem("lamp","green");
            break;
        case "gray":
            document.getElementById('lamp').style.background = '#B0B0B0';
            setItem("lamp","gray");
            break;
        default:
            document.getElementById('lamp').style.background = '#FFFFFF';
            setItem("lamp","white");
    }
}

function setItem(id, value) {
    localStorage.setItem(id, value);
};

function getItem(id) {
    return localStorage.getItem(id);
}

function goToLogin() {
    setItem("deep_link",appURL);
    localStorage.setItem("sessionID", '');
    localStorage.setItem("user", '');
    localStorage.setItem("workplaceID", '');
    sessionId = '';
    username = '';
    window.location = "../login/index.html";
}

function redirectToWorkplace() {
    window.location = "../Workplace/index.html";
}

//Get Format for Date
function fGetFormat() {
    if (localStorage.getItem("dateFormat") != null) {
        if (localStorage.getItem("dateFormat")==0){
            return "DD.MM.YYYY";
        }else{
            return "MM.DD.YYYY";
        }
    } else {
        localStorage.setItem("dateFormat", 0)
        return "DD.MM.YYYY";
    }
}
function fGetNumberFormat() {
    if (localStorage.getItem("numberFormat") != null) {
        switch(localStorage.getItem("numberFormat")){
            case '0':
                return ".,"
                break;
            case '1':
                return ",.";
                break;
            case '2':
                return ". ";
                break;
            case '3':
                return ", ";
                break;
            case '4':
                return ".,";
                break;
            case '5':
                return ",.";
                break;
            default:
                return ",.";
        }
    } else {
        localStorage.setItem("numberFormat", 0)
        return ".,";
    }
}
function fGetNumberFormatV2() {
    if (localStorage.getItem("numberFormat") != null) {
        switch(localStorage.getItem("numberFormat")){
            case '0':
                return ".v"
                break;
            case '1':
                return "v.";
                break;
            case '2':
                return ". ";
                break;
            case '3':
                return "v ";
                break;
            case '4':
                return ".v";
                break;
            case '5':
                return "v.";
                break;
            default:
                return "v.";
        }
    } else {
        localStorage.setItem("numberFormat", 0)
        return ".v";
    }
}
function fGetNumberFormatChar(){
    if (localStorage.getItem("numberFormat") != null) {
        switch(localStorage.getItem("numberFormat")){
            case '4':
                return "FM999999990D09"
                break;
            case '5':
                return "FM999999990D09";
                break;
            default:
                return "FM999G999G990D09";
        }
    } else {
        localStorage.setItem("numberFormat", 0)
        return ".,";
    }
}