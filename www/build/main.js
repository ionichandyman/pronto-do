webpackJsonp([9],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_group_provider__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddGroupPage = /** @class */ (function () {
    function AddGroupPage(navCtrl, navParams, groupProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupProvider = groupProvider;
        this.data = { groupName: '' };
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups/');
        this.userId = navParams.get("userId");
    }
    AddGroupPage.prototype.addProjectData = function () {
        this.groupProvider.addGroup(this.data, this.userId);
        this.navCtrl.pop();
    };
    AddGroupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddGroupPageaaaaaaa');
    };
    AddGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-group',template:/*ion-inline-start:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/add-group/add-group.html"*/'<!--\n  Generated template for the AddProjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton=false>\n    <ion-title>Enter Group Name</ion-title>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form (ngSubmit)="addProjectData()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating> Enter Group Name</ion-label>\n        <ion-input type="text" [(ngModel)]="data.groupName" name="groupName" required="*"></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button full round color="secondary" type="submit">Enter</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/add-group/add-group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_group_provider__["a" /* GroupProvider */]])
    ], AddGroupPage);
    return AddGroupPage;
}());

//# sourceMappingURL=add-group.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_group_provider__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddMembersPage = /** @class */ (function () {
    function AddMembersPage(navCtrl, navParams, groupProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupProvider = groupProvider;
        this.projectKey = this.navParams.get("projectKey");
        this.groupName = this.navParams.get("groupName");
    }
    AddMembersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddMembersPage');
    };
    AddMembersPage.prototype.addMembers = function () {
        this.groupProvider.addMembers({ username: this.username, mobileno: this.mobileno, email: this.email, key: this.projectKey, groupName: this.groupName });
        this.navCtrl.pop();
    };
    AddMembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-members',template:/*ion-inline-start:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/add-members/add-members.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{projectName}}</ion-title>\n  </ion-navbar>\n  <ion-navbar>\n    <ion-title>Add Members</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="addMembers()">\n        <ion-list>\n            <ion-item>\n              <ion-label floating>username:</ion-label>\n              <ion-input type="text" [(ngModel)]="username" name="username" required="*"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>mobile no:</ion-label>\n              <ion-textarea type="text" [(ngModel)]="mobileno" name="mobileno" required="*"></ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>email:</ion-label>\n              <ion-input type="text" [(ngModel)]="email" name="email" required="*"></ion-input>\n            </ion-item>\n            <ion-item>\n              <button ion-button full round color="secondary" type="submit">Enter</button>\n            </ion-item>\n          </ion-list>\n    </form>\n \n</ion-content>\n\n'/*ion-inline-end:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/add-members/add-members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_group_provider__["a" /* GroupProvider */]])
    ], AddMembersPage);
    return AddMembersPage;
}());

//# sourceMappingURL=add-members.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_group_provider__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddNotesPage = /** @class */ (function () {
    function AddNotesPage(navCtrl, navParams, groupService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupService = groupService;
        this.projectKey = navParams.get("projectKey");
        this.projectName = navParams.get("projectName");
        this.userid = navParams.get("userid");
        alert('add-notes constructor');
    }
    AddNotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNotesPage');
        alert(this.userid);
    };
    AddNotesPage.prototype.addProjectNotes = function () {
        var me = this;
        var datax;
        this.refUserTask = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/' + this.taskOwner).child('tasks');
        this.refCreatorTask = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/' + this.userid).child('outbox');
        datax = {
            projectName: me.projectName,
            projectNotes: me.projectNotes,
            messages: me.messages,
            type: 'notes',
            taskOwner: me.taskOwner,
            taskOwnerId: me.taskOwner,
            joinDate: Date(),
            status: 'P',
            createdBy: me.userid
        };
        this.groupService.addGroupNotes(this.projectKey, datax);
        /*
        this.refUserTask.child(newData.getKey()).set({
          projectNotes : me.projectNotes,
          projectName : me.projectName,
          messages : me.messages,
          type : 'notes',
          taskOwner : me.taskOwner,
          taskOwnerId : me.taskOwner,
          createDate : Date(),
          status : 'P',
          createdBy : me.userid
        });
        this.refCreatorTask.child(newData.getKey()).set({
          projectName : me.projectName,
          projectNotes : me.projectNotes,
          messages : me.messages,
          type : 'notes',
          taskOwner : me.taskOwner,
          taskOwnerId : me.taskOwner,
          createDate : Date(),
          status : 'P',
          createdBy : me.userid
        });
        */
        this.navCtrl.pop();
    };
    AddNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-notes',template:/*ion-inline-start:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/add-notes/add-notes.html"*/'<!--\n  Generated template for the AddNotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{projectName}}</ion-title>\n  </ion-navbar>\n  <ion-navbar>\n    <ion-title>add-notes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="addProjectNotes()">\n        <ion-list>\n            <ion-item>\n              <ion-label floating>Task Name:</ion-label>\n              <ion-input type="text" [(ngModel)]="projectNotes" name="projectNotes" required="*"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Description:</ion-label>\n              <ion-textarea type="text" [(ngModel)]="messages" name="messages" required="*"></ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Assignee:</ion-label>\n              <ion-input type="text" [(ngModel)]="taskOwner" name="taskOwner" required="*"></ion-input>\n            </ion-item>\n            <ion-item>\n              <button ion-button full round color="secondary" type="submit">Enter</button>\n            </ion-item>\n          </ion-list>\n    </form>\n \n</ion-content>\n\n'/*ion-inline-end:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/add-notes/add-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_group_provider__["a" /* GroupProvider */]])
    ], AddNotesPage);
    return AddNotesPage;
}());

//# sourceMappingURL=add-notes.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_group_provider__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditGroupPage = /** @class */ (function () {
    function EditGroupPage(navCtrl, navParams, groupProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupProvider = groupProvider;
        this.selectedGroup = navParams.get("selectedGroup");
        alert(this.selectedGroup.groupName);
        alert(this.selectedGroup.key);
    }
    EditGroupPage.prototype.submitChange = function () {
        var me = this;
        this.selectedGroup.groupName = this.projectData.groupName;
        this.groupProvider.editGroup(this.selectedGroup);
        me.navCtrl.pop();
    };
    EditGroupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProjectsPage');
    };
    EditGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-group',template:/*ion-inline-start:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/edit-group/edit-group.html"*/'<!--\n  Generated template for the EditProjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Group</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <form (ngSubmit)="submitChange()">\n        <ion-list>\n            <ion-item>\n              <ion-label floating> Enter Group Name</ion-label>\n              <ion-input type="text" [(ngModel)]="projectData.groupName" name="groupName" required="*"></ion-input>\n            </ion-item>\n            <ion-item>\n              <button ion-button full round color="secondary" type="submit">Enter</button>\n            </ion-item>\n          </ion-list>\n    </form>\n  <ion-item>\n \n  </ion-item>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/edit-group/edit-group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_group_provider__["a" /* GroupProvider */]])
    ], EditGroupPage);
    return EditGroupPage;
}());

//# sourceMappingURL=edit-group.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_notes_add_notes__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_commonfunctions__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_group_provider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groups_groups__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__outbox_outbox__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mytask_mytask__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_members_add_members__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ProjectsNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectsNotesPage = /** @class */ (function () {
    function ProjectsNotesPage(navCtrl, navParams, groupService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupService = groupService;
        this.commonFn = new __WEBPACK_IMPORTED_MODULE_3__app_helpers_commonfunctions__["a" /* CommonFunctions */]();
        this.assignedTab = __WEBPACK_IMPORTED_MODULE_6__outbox_outbox__["a" /* OutboxPage */];
        this.projectsTab = __WEBPACK_IMPORTED_MODULE_5__groups_groups__["a" /* GroupsPage */];
        this.myTaskTab = __WEBPACK_IMPORTED_MODULE_7__mytask_mytask__["a" /* MytaskPage */];
        this.tabParams = { userid: "" };
        this.projectKey = navParams.get("projectKey");
        this.userId = navParams.get("userid");
        this.projectName = navParams.get("projectName");
        this.notesSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();
        this.membersSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();
        this.options = "Tasks";
        this.notesSubject.subscribe(function (data) {
            alert('loaded notes');
            _this.groupNotes = data;
            _this.groupNotes.reverse();
        });
        this.membersSubject.subscribe(function (data) {
            _this.membersList = data;
            console.log('members loaded');
        });
        groupService.loadGroupNotes(this.projectKey, this.notesSubject);
        groupService.loadGroupMembers(this.projectKey, this.membersSubject);
    }
    ProjectsNotesPage.prototype.addTask = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_notes_add_notes__["a" /* AddNotesPage */], { projectKey: this.projectKey, projectName: this.projectName, userid: this.userId });
    };
    ProjectsNotesPage.prototype.addMembers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__add_members_add_members__["a" /* AddMembersPage */], { projectKey: this.projectKey, userId: this.userId, groupName: this.projectName });
    };
    ProjectsNotesPage.prototype.close = function (selectedItem) {
        var dataForEdit = this.ref.child(selectedItem);
        dataForEdit.update({
            "status": "C"
        }).then(function () {
            alert("Successfully updated");
        }).catch(function (error) {
            alert("Unable to update");
        });
    };
    ProjectsNotesPage.prototype.reOpen = function (selectedItem) {
        var dataForOpen = this.ref.child(selectedItem);
        dataForOpen.update({
            "status": "P",
            "joinDate": Date()
        }).then(function () {
            alert("Successfully updated");
        }).catch(function (error) {
            alert("Unable to update");
        });
    };
    ProjectsNotesPage.prototype.delete = function (selectedItem) {
        this.ref.child(selectedItem).remove();
    };
    ProjectsNotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectsNotesPage');
        alert('loaded');
    };
    ProjectsNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projects-notes',template:/*ion-inline-start:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/projects-notes/projects-notes.html"*/'<!--\n  Generated template for the ProjectsNotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{projectName}}</ion-title>\n    <!--ion-buttons end>\n      <button ion-button icon-only (click)="addTask()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n      <ion-segment [(ngModel)]="options" color="secondary">\n          <ion-segment-button value="Tasks">\n            Tasks\n          </ion-segment-button>\n          <ion-segment-button value="Members">\n            Members\n          </ion-segment-button>\n      </ion-segment>\n     \n  </ion-row>\n  <ion-row [ngSwitch]="options">\n      <ion-list *ngSwitchCase="\'Tasks\'">\n        <ion-row>\n            <button ion-button (click)="addTask()">Add Tasks</button>\n        </ion-row>\n        <ion-row>\n            <ion-list no-lines>\n                <ion-item *ngFor="let proj of groupNotes">\n                  <ion-card *ngIf="proj.type!=\'logentry\'" class="ion-card" >\n                    <ion-card-header>\n                      {{proj.projectNotes}}\n                    </ion-card-header>\n                    <ion-card-content>\n                      <b>Details :</b><br>\n                      <ion-item text-wrap>\n                        {{proj.messages}} \n                      </ion-item>\n                      <b>Assigned to</b> : <br>\n                      {{proj.taskOwner}}<br>\n                      <b>Reported by</b> : <br>\n                      {{proj.createdBy}}\n                      <br>\n                      <b>Status : </b> <br>\n                      \n                      <span *ngIf="proj.status==\'R\'">REJECTED</span>\n                      <span *ngIf="proj.status==\'P\'">OPEN</span>\n                      <span *ngIf="proj.status==\'C\'">COMPLETE</span>\n                     \n                    </ion-card-content>\n                    <ion-row>\n                      <ion-col>\n                          <button ion-button color="danger" (click)="delete(proj.key)" small>Delete</button>\n                      </ion-col>\n                      <ion-col>\n                          <button *ngIf="proj.status!=\'P\'"  ion-button color="default" (click)="reOpen(proj.key)" small>Re-Open</button>\n                          <button *ngIf="proj.status==\'P\'" ion-button color="secondary" (click)="close(proj.key)" small>Complete</button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card>\n                </ion-item>\n            </ion-list>\n        </ion-row>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'Members\'">\n        <ion-row>\n            <button ion-button (click)="addMembers()">Add Members</button>\n        </ion-row>\n        <ion-row>\n          <ion-list>\n            <ion-item *ngFor="let member of membersList">\n               {{member.username}}\n            </ion-item>\n          </ion-list>\n        </ion-row>\n      </ion-list>\n  </ion-row>\n \n</ion-content>\n\n<!--ion-list>\n    <ion-item>\n      <ion-label floating>Task Name:</ion-label>\n      <ion-input type="text" [(ngModel)]="projectNotes" name="projectNotes" required="*"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Description:</ion-label>\n      <ion-input type="text" [(ngModel)]="messages" name="messages" required="*"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Assignee:</ion-label>\n      <ion-input type="text" [(ngModel)]="taskOwner" name="taskOwner" required="*"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button full round color="secondary" type="submit">Enter</button>\n    </ion-item>\n  </ion-list-->\n\n\n'/*ion-inline-end:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/projects-notes/projects-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_group_provider__["a" /* GroupProvider */]])
    ], ProjectsNotesPage);
    return ProjectsNotesPage;
}());

//# sourceMappingURL=projects-notes.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { username: "" };
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.enterUserName = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
            userid: this.data.username
        });
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/sign-in/sign-in.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Signin</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="enterUserName()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Enter user name</ion-label>\n        <ion-input type="text" [(ngModel)]="data.username" name="username" required=""></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button full round color="secondary" type="submit">Enter</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/sign-in/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-group/add-group.module": [
		440,
		8
	],
	"../pages/add-members/add-members.module": [
		441,
		7
	],
	"../pages/add-notes/add-notes.module": [
		442,
		6
	],
	"../pages/edit-group/edit-group.module": [
		443,
		5
	],
	"../pages/groups/groups.module": [
		444,
		4
	],
	"../pages/mytask/mytask.module": [
		445,
		3
	],
	"../pages/outbox/outbox.module": [
		446,
		2
	],
	"../pages/projects-notes/projects-notes.module": [
		447,
		1
	],
	"../pages/sign-in/sign-in.module": [
		448,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 200;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups_groups__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__outbox_outbox__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mytask_mytask__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.assignedTab = __WEBPACK_IMPORTED_MODULE_3__outbox_outbox__["a" /* OutboxPage */];
        this.projectsTab = __WEBPACK_IMPORTED_MODULE_2__groups_groups__["a" /* GroupsPage */];
        this.myTaskTab = __WEBPACK_IMPORTED_MODULE_4__mytask_mytask__["a" /* MytaskPage */];
        this.tabParams = { userid: "" };
        this.userid = navParams.get("userid");
        this.tabParams.userid = this.userid;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/home/home.html"*/'\n<ion-content padding class="scroll-content">\n  \n<ion-row>\n  <ion-item>\n      \n  </ion-item>\n</ion-row>\n<ion-tabs>\n  <ion-tab tabIcon="list" [root]=\'projectsTab\' tabTitle="My Projects" [rootParams]="tabParams">Proj</ion-tab>\n   <ion-tab tabIcon="md-mail-open" [root]=\'assignedTab\' [rootParams]="tabParams" tabTitle=\'Requests\'></ion-tab>\n   <ion-tab tabIcon="done-all" [root]=\'myTaskTab\' [rootParams]="tabParams" tabTitle=\'My Tasks\'></ion-tab>\n</ion-tabs> \n</ion-content>\n'/*ion-inline-end:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(307);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_projects_notes_projects_notes__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_group_add_group__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_sign_in__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_groups_groups__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_group_edit_group__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_notes_add_notes__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_outbox_outbox__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mytask_mytask__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_group_provider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_members_add_members__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_group_add_group__["a" /* AddGroupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_projects_notes_projects_notes__["a" /* ProjectsNotesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_group_edit_group__["a" /* EditGroupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_notes_add_notes__["a" /* AddNotesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_outbox_outbox__["a" /* OutboxPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mytask_mytask__["a" /* MytaskPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_members_add_members__["a" /* AddMembersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-group/add-group.module#AddGroupPageModule', name: 'AddGroupPage', segment: 'add-group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-members/add-members.module#AddMembersPageModule', name: 'AddMembersPage', segment: 'add-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-notes/add-notes.module#AddNotesPageModule', name: 'AddNotesPage', segment: 'add-notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-group/edit-group.module#EditGroupPageModule', name: 'EditGroupPage', segment: 'edit-group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groups/groups.module#GroupsPageModule', name: 'GroupsPage', segment: 'groups', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mytask/mytask.module#MytaskPageModule', name: 'MytaskPage', segment: 'mytask', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/outbox/outbox.module#OutboxPageModule', name: 'OutboxPage', segment: 'outbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects-notes/projects-notes.module#ProjectsNotesPageModule', name: 'ProjectsNotesPage', segment: 'projects-notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_group_add_group__["a" /* AddGroupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_projects_notes_projects_notes__["a" /* ProjectsNotesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_group_edit_group__["a" /* EditGroupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_projects_notes_projects_notes__["a" /* ProjectsNotesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_notes_add_notes__["a" /* AddNotesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_outbox_outbox__["a" /* OutboxPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mytask_mytask__["a" /* MytaskPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_members_add_members__["a" /* AddMembersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_group_provider__["a" /* GroupProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_commonfunctions__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ProntoDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GroupProvider = /** @class */ (function () {
    function GroupProvider() {
        this.commonFn = new __WEBPACK_IMPORTED_MODULE_2__app_helpers_commonfunctions__["a" /* CommonFunctions */]();
        console.log('pronto-provider');
    }
    GroupProvider.prototype.loadUserTask = function (userId, givenSubject) {
        var _this = this;
        this.refUserTask = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('user/' + userId + '/tasks/');
        this.refUserTask.on('value', function (resp) {
            //this.groupsRepo.next(this.commonFn.snapShotToArray(resp));
            _this.userTasks = _this.commonFn.snapShotToArray(resp);
            alert(_this.userTasks);
            givenSubject.next(_this.userTasks); //inform subject that task is done.
        });
    };
    GroupProvider.prototype.updateUserTask = function (taskItem) {
        if (this.refUserTask != null) {
            this.refUserTask.child(taskItem.key).set(taskItem);
        }
        if (this.refNotes != null) {
            this.refNotes.child(taskItem.key).set(taskItem);
        }
        this.refOutBoxTask = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('user/' + taskItem.createdBy + '/outbox').child(taskItem.key);
        this.refOutBoxTask.set(taskItem);
    };
    GroupProvider.prototype.loadGroups = function (userId, givenSubject) {
        var _this = this;
        this.ref = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('user/' + userId + '/groups/');
        this.ref.on('value', function (resp) {
            //this.groupsRepo.next(this.commonFn.snapShotToArray(resp));
            _this.knownGroups = _this.commonFn.snapShotToArray(resp);
            givenSubject.next(_this.knownGroups); //inform subject that task is done.
        });
    };
    GroupProvider.prototype.loadGroupNotes = function (key, giventSubject) {
        var _this = this;
        //1. create ref for groupnotes
        if (this.refNotes == null && this.groupNotes == null) {
            this.refNotes = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('groups/' + key + '/tasks/');
            //2. load notes from key
            this.refNotes.on('value', function (resp) {
                _this.groupNotes = _this.commonFn.snapShotToArray(resp);
                giventSubject.next(_this.groupNotes);
            });
        }
        else {
            giventSubject.next(this.groupNotes);
        }
    };
    GroupProvider.prototype.addGroupNotes = function (key, data) {
        this.refNotes = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('groups/' + key).child('tasks');
        var noteData = this.refNotes.push();
        noteData.set(data);
        data.key = noteData.key;
        this.addUsersTasks(noteData.key, data);
        this.logCreatorTask(noteData.key, data);
    };
    GroupProvider.prototype.addKnownGroups = function (data) {
        if (this.refKnownGroups == null) {
            this.refKnownGroups = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('knowngroups/' + data.key);
        }
        this.refKnownGroups.set(data);
    };
    GroupProvider.prototype.addUserGroup = function (userNo, groupNo, gName) {
        this.refUserGroup = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('user/' + userNo + '/groups/' + groupNo);
        var userGroupData;
        userGroupData = {
            userId: userNo,
            groupName: gName
        };
        this.refUserGroup.set(userGroupData);
    };
    GroupProvider.prototype.logCreatorTask = function (key, data) {
        this.refOutBoxTask = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('user/' + data.createdBy + '/outbox').child(key);
        this.refOutBoxTask.set(data);
    };
    GroupProvider.prototype.addMembers = function (data) {
        this.refMember = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('groups/' + data.key + '/members/');
        var memberData = this.refMember.push();
        memberData.set({ username: data.username,
            email: data.email,
            mobileno: data.mobileno
        });
        this.addUserGroup(data.username, data.key, data.groupName);
    };
    GroupProvider.prototype.loadGroupMembers = function (groupKey, subject) {
        var _this = this;
        if (this.refMember == null && this.groupMember == null) {
            this.refMember = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('groups/' + groupKey + '/members/');
            alert(groupKey);
            this.refMember.on('value', function (resp) {
                _this.groupMember = _this.commonFn.snapShotToArray(resp);
                subject.next(_this.groupMember);
            });
        }
        else {
            subject.next(this.groupMember);
        }
    };
    GroupProvider.prototype.addUsersTasks = function (key, data) {
        this.refUserTask = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('user/' + data.taskOwner + '/tasks').child(key);
        this.refUserTask.set(data);
        this.refUserTask.set(data);
    };
    GroupProvider.prototype.deleteItem = function (selectedItem) {
        this.ref.child(selectedItem).remove();
    };
    GroupProvider.prototype.addGroup = function (data, userId) {
        var newData = this.ref.push();
        newData.set({
            groupName: data.groupName
        });
        //this.addUserGroup(userId,newData.key,data.groupName);
        data.key = newData.key;
        this.addKnownGroups(data);
        return data.key;
    };
    GroupProvider.prototype.editGroup = function (data) {
        this.ref.update({
            "groupName": data.groupName
        }).then(function () {
            console.log('success');
        }).catch(function (error) {
            alert("Update Failed" + error);
        });
    };
    GroupProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GroupProvider);
    return GroupProvider;
}());

//# sourceMappingURL=group-provider.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sign_in_sign_in__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var config = {
    apiKey: "AIzaSyDLE8ta2WCd-1WgefJ9v1xzLiiAtkbOC0o",
    authDomain: "pronto-do-list.firebaseapp.com",
    databaseURL: "https://pronto-do-list.firebaseio.com",
    projectId: "pronto-do-list",
    storageBucket: "pronto-do-list.appspot.com",
    messagingSenderId: "88852037526"
};
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_sign_in_sign_in__["a" /* SignInPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](config);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonFunctions; });
var CommonFunctions = /** @class */ (function () {
    function CommonFunctions() {
        this.snapShotToArray = function (snapshot) {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                item.key = childSnapshot.key;
                returnArr.push(item);
            });
            return returnArr;
        };
    }
    return CommonFunctions;
}());

//# sourceMappingURL=commonfunctions.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_notes_projects_notes__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_group_add_group__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_group_edit_group__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_group_provider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupsPage = /** @class */ (function () {
    function GroupsPage(navCtrl, navParams, groupService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupService = groupService;
        this.userId = navParams.get("userid");
        this.groupSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
    }
    GroupsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProjectsPage');
        //1. I created a subject because the call to the provider is an async call
        //2. There's a chance that the view had loaded but the service hasn't responded back
        //3. When we call the service, we pass the subject created here on the function.
        //4. Once task has completed, [subject].next([data]) is used to push the data back to the calling entity
        this.groupSubject.subscribe(function (data) {
            _this.localGroups = data;
            console.log('groups loaded');
        });
        this.groupService.loadGroups(this.userId, this.groupSubject);
    };
    GroupsPage.prototype.addProjects = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_group_add_group__["a" /* AddGroupPage */], { userId: this.userId });
    };
    GroupsPage.prototype.goToProject = function (key, text) {
        var me = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__projects_notes_projects_notes__["a" /* ProjectsNotesPage */], { projectKey: key, userid: me.userId, projectName: text });
    };
    GroupsPage.prototype.delete = function (selectedItem) {
        this.groupService.deleteItem(selectedItem);
    };
    GroupsPage.prototype.edit = function (selectedItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_group_edit_group__["a" /* EditGroupPage */], { selectedGroup: selectedItem });
    };
    GroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groups',template:/*ion-inline-start:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/groups/groups.html"*/'\n\n<ion-header>\n  <ion-navbar hideBackButton=false>\n    <ion-title>Groups</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="signOut()">\n        Leave\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addProjects()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="scroll-content">\n  <ion-list>\n    <ion-item-sliding *ngFor="let proj of localGroups">\n      <ion-item>\n          {{proj.groupName}}\n          <ion-icon name="md-open" item-end (click)="goToProject(proj.key,proj.groupName)"></ion-icon>\n      </ion-item>\n      <ion-item-options side="right">\n          <button ion-button expandable (click)="edit(proj)">Edit</button>\n          <button ion-button color="danger" expandable (click)="delete(proj.key)">Delete</button>\n       </ion-item-options>\n   </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/groups/groups.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_group_provider__["a" /* GroupProvider */]])
    ], GroupsPage);
    return GroupsPage;
}());

//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_commonfunctions__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OutboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OutboxPage = /** @class */ (function () {
    function OutboxPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonFn = new __WEBPACK_IMPORTED_MODULE_3__app_helpers_commonfunctions__["a" /* CommonFunctions */]();
        this.userid = navParams.get("userid");
        this.taskRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/' + this.userid).child('outbox');
        this.taskRef.on('value', function (resp) {
            _this.projectNotes = [];
            _this.projectNotes = _this.commonFn.snapShotToArray(resp);
        });
    }
    OutboxPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OutboxPage');
    };
    OutboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-outbox',template:/*ion-inline-start:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/outbox/outbox.html"*/'<!--\n  Generated template for the OutboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  <ion-navbar>\n    <ion-title>Outbox</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item *ngFor="let proj of projectNotes">\n      <ion-card *ngIf="proj.type!=\'logentry\'" class="ion-card" >\n          <ion-card-header>\n              {{proj.projectName}}\n            </ion-card-header>\n        <ion-card-header>\n          {{proj.projectNotes}}\n        </ion-card-header>\n        <ion-card-content>\n            <b>Details :</b><br>\n          <ion-item text-wrap>\n              {{proj.messages}} <br>\n          </ion-item>\n          <b>Assigned to</b> : <br>\n          {{proj.taskOwner}}<br>\n          <b>Reported by</b> : <br>\n          {{proj.createdBy}}\n          <br>\n          <b>Status : </b> <br>\n           {{proj.status==\'P\' ? \'Open\' : \'Completed\'}}\n        </ion-card-content>\n        <ion-row>\n          <ion-col>\n              <button ion-button color="danger" (click)="delete(proj.key)" small>Delete</button>\n          </ion-col>\n          <ion-col>\n              <button *ngIf="proj.status!=\'P\'"  ion-button color="default" (click)="reOpen(proj.key)" small>Re-Open</button>\n              <button *ngIf="proj.status==\'P\'" ion-button color="secondary" (click)="close(proj.key)" small>Complete</button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/outbox/outbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OutboxPage);
    return OutboxPage;
}());

//# sourceMappingURL=outbox.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_commonfunctions__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_group_provider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MytaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MytaskPage = /** @class */ (function () {
    function MytaskPage(navCtrl, navParams, groupProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupProvider = groupProvider;
        this.tabParams = { userid: "" };
        this.commonFn = new __WEBPACK_IMPORTED_MODULE_2__app_helpers_commonfunctions__["a" /* CommonFunctions */]();
        this.userid = navParams.get("userid");
        this.userTaskSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.userTaskSubject.subscribe(function (data) {
            _this.userTasks = data;
        });
        groupProvider.loadUserTask(this.userid, this.userTaskSubject);
    }
    MytaskPage.prototype.delete = function (key) {
    };
    MytaskPage.prototype.rejectTask = function (selectedItem) {
        var updatedItem = this.userTasks.filter(function (x) { return x.key == selectedItem; });
        if (updatedItem != null) {
            if (updatedItem.length > 0) {
                updatedItem[0].status = 'R';
                this.groupProvider.updateUserTask(updatedItem[0]);
            }
        }
    };
    MytaskPage.prototype.completeTask = function (selectedItem) {
        var updatedItem = this.userTasks.filter(function (x) { return x.key == selectedItem; });
        if (updatedItem != null) {
            if (updatedItem.length > 0) {
                updatedItem[0].status = 'C';
                this.groupProvider.updateUserTask(updatedItem[0]);
            }
        }
    };
    MytaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MytaskPage');
    };
    MytaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mytask',template:/*ion-inline-start:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/mytask/mytask.html"*/'<!--\n  Generated template for the MytaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Tasks</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list no-lines>\n        <ion-item *ngFor="let proj of userTasks">\n          <ion-card *ngIf="proj.type!=\'logentry\'" class="ion-card" >\n              <ion-card-header>\n                  {{proj.projectName}}\n                </ion-card-header>\n            <ion-card-header>\n              {{proj.projectNotes}}\n            </ion-card-header>\n            <ion-card-content>\n              <b>Details :</b><br>\n              <ion-item text-wrap>\n                {{proj.messages}} <br>\n             </ion-item>\n              <b>Assigned to</b> : <br>\n              {{proj.taskOwner}}<br>\n              <b>Reported by</b> : <br>\n              {{proj.createdBy}}\n              <br>\n              <b>Status : </b> <br>\n              <span *ngIf="proj.status==\'R\'">REJECTED</span>\n              <span *ngIf="proj.status==\'P\'">OPEN</span>\n              <span *ngIf="proj.status==\'C\'">COMPLETE</span>\n             \n            </ion-card-content>\n            <ion-row>\n              <ion-col>\n                  <button ion-button color="danger" (click)="rejectTask(proj.key)" small>REJECT</button>\n              </ion-col>\n              <ion-col>\n                  <button *ngIf="proj.status!=\'P\'"  ion-button color="default" (click)="reOpen(proj.key)" small>Re-Open</button>\n                  <button *ngIf="proj.status==\'P\'" ion-button color="secondary" (click)="completeTask(proj.key)" small>Complete</button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/JakeAbella/ionic-handyman-nov2018/pronto-do/src/pages/mytask/mytask.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_group_provider__["a" /* GroupProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_group_provider__["a" /* GroupProvider */]) === "function" && _c || Object])
    ], MytaskPage);
    return MytaskPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=mytask.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map