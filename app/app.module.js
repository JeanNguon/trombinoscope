"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/////////////////////// Module ///////////////////////
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
var in_memory_web_api_module_1 = require('angular-in-memory-web-api/in-memory-web-api.module');
var in_memory_data_service_1 = require('./in_memory/in-memory-data.service');
/////////////////////// Extension ///////////////////////
require('./extension/rxjs-extension');
/////////////////////// Component ///////////////////////
var app_component_1 = require('./component/app/app.component');
var person_component_1 = require('./component/person/person.component');
var person_detail_component_1 = require('./component/person/person_detail/person-detail.component');
var dashboard_component_1 = require('./component/dashboard/dashboard.component');
var person_search_component_1 = require('./component/person/person_search/person-search.component');
;
/////////////////////// Service ///////////////////////
var person_service_1 = require('./service/person.service');
/////////////////////// Routing ///////////////////////
var app_routing_module_1 = require('./routing/app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                in_memory_web_api_module_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                person_component_1.PersonComponent,
                person_detail_component_1.PersonDetailComponent,
                person_search_component_1.PersonSearchComponent,
                dashboard_component_1.DashboardComponent,
            ],
            providers: [
                person_service_1.PersonService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map