angular.module("app.services").factory("statusService",["AppConfig","$http",function(t,n){return{get:function(){return n({url:"api.test/status.enum.json",method:"GET"}).then(function(t){return t.data})}}}]);