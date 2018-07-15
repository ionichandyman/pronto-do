webpackJsonp([6],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
    function AddNotesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projectKey = navParams.get("projectKey");
        this.projectName = navParams.get("projectName");
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('projects/' + this.projectKey + '/projectNotes/');
    }
    AddNotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNotesPage');
    };
    AddNotesPage.prototype.addProjectNotes = function () {
        var me = this;
        var newData = this.ref.push();
        newData.set({
            projectNotes: this.projectNotes,
            messages: this.messages,
            type: 'notes',
            loginId: this.taskOwner,
            joinDate: Date(),
            createdBy: 'SYSTEM',
            status: 'P'
        });
        this.navCtrl.pop();
    };
    AddNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-notes',template:/*ion-inline-start:"C:\pronto\pronto-do\src\pages\add-notes\add-notes.html"*/'<!--\n\n  Generated template for the AddNotesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{projectName}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-navbar>\n\n    <ion-title>add-notes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="addProjectNotes()">\n\n        <ion-list>\n\n            <ion-item>\n\n              <ion-label floating>Task Name:</ion-label>\n\n              <ion-input type="text" [(ngModel)]="projectNotes" name="projectNotes" required="*"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>Description:</ion-label>\n\n              <ion-input type="text" [(ngModel)]="messages" name="messages" required="*"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>Assignee:</ion-label>\n\n              <ion-input type="text" [(ngModel)]="taskOwner" name="taskOwner" required="*"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <button ion-button full round color="secondary" type="submit">Enter</button>\n\n            </ion-item>\n\n          </ion-list>\n\n    </form>\n\n \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\pronto\pronto-do\src\pages\add-notes\add-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AddNotesPage);
    return AddNotesPage;
}());

//# sourceMappingURL=add-notes.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
var AddProjectsPage = /** @class */ (function () {
    function AddProjectsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { projectName: '' };
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('projects/');
    }
    AddProjectsPage.prototype.addProjectData = function () {
        var newData = this.ref.push();
        newData.set({
            projectName: this.data.projectName
        });
        this.navCtrl.pop();
    };
    AddProjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProjectsPage');
    };
    AddProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-projects',template:/*ion-inline-start:"C:\pronto\pronto-do\src\pages\add-projects\add-projects.html"*/'<!--\n\n  Generated template for the AddProjectsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar hideBackButton=false>\n\n    <ion-title>Enter Project Name</ion-title>\n\n    <ion-buttons end>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="addProjectData()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating> Enter Project Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="data.projectName" name="projectName" required="*"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button ion-button full round color="secondary" type="submit">Enter</button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\pronto\pronto-do\src\pages\add-projects\add-projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AddProjectsPage);
    return AddProjectsPage;
}());

//# sourceMappingURL=add-projects.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
var EditProjectsPage = /** @class */ (function () {
    function EditProjectsPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedKey = navParams.get('selectedKey');
        alert(this.selectedKey);
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('projects/' + this.selectedKey);
        this.ref.once('value').then(function (res) {
            _this.projectData = res.val();
        });
    }
    EditProjectsPage.prototype.submitChange = function () {
        var me = this;
        this.ref.update({
            "projectName": this.projectData.projectName
        }).then(function () {
            alert("Update successful");
            me.navCtrl.pop();
        }).catch(function (error) {
            alert("Update Failed" + error);
        });
    };
    EditProjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProjectsPage');
    };
    EditProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-projects',template:/*ion-inline-start:"C:\pronto\pronto-do\src\pages\edit-projects\edit-projects.html"*/'<!--\n\n  Generated template for the EditProjectsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>edit-projects</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n    <form (ngSubmit)="submitChange()">\n\n        <ion-list>\n\n            <ion-item>\n\n              <ion-label floating> Enter Project Name</ion-label>\n\n              <ion-input type="text" [(ngModel)]="projectData.projectName" name="projectName" required="*"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <button ion-button full round color="secondary" type="submit">Enter</button>\n\n            </ion-item>\n\n          </ion-list>\n\n    </form>\n\n  <ion-item>\n\n \n\n  </ion-item>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\pronto\pronto-do\src\pages\edit-projects\edit-projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EditProjectsPage);
    return EditProjectsPage;
}());

//# sourceMappingURL=edit-projects.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsNotesPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_notes_add_notes__ = __webpack_require__(140);
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
    function ProjectsNotesPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projectKey = navParams.get("projectKey");
        this.userId = navParams.get("userId");
        this.projectName = navParams.get("projectName");
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('projects/' + this.projectKey + '/projectNotes/');
        this.refRead = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('projects/' + this.projectKey + '/projectNotes/').orderByChild('joinDate');
        //this.addNotes();
        this.refRead.on('value', function (resp) {
            _this.projectTasks = snapshotToArray(resp);
            _this.projectTasks.reverse();
        });
    }
    ProjectsNotesPage.prototype.addTask = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_notes_add_notes__["a" /* AddNotesPage */], { projectKey: this.projectKey, projectName: this.projectName });
    };
    ProjectsNotesPage.prototype.addNotes = function () {
        var me = this;
        var newData = this.ref.push();
        newData.set({
            projectNotes: me.userId + " has joined ",
            messages: "projectData.messages",
            type: "logentry",
            loginId: "uncajy",
            joinDate: Date()
        });
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
    };
    ProjectsNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projects-notes',template:/*ion-inline-start:"C:\pronto\pronto-do\src\pages\projects-notes\projects-notes.html"*/'<!--\n\n  Generated template for the ProjectsNotesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Project Notes</ion-title>\n\n  </ion-navbar>\n\n  <ion-navbar>\n\n    <ion-title>{{projectName}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addTask()">\n\n        <ion-icon name="add-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list no-lines>\n\n      <ion-item *ngFor="let proj of projectTasks">\n\n        <ion-card *ngIf="proj.type!=\'logentry\'" class="ion-card" >\n\n          <ion-card-header>\n\n            {{proj.projectNotes}}\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <b>Details :</b><br>\n\n            {{proj.messages}} <br>\n\n            <b>Assigned to</b> : <br>\n\n            {{proj.taskOwner}}<br>\n\n            <b>Reported by</b> : <br>\n\n            {{proj.createdBy}}\n\n            <br>\n\n            <b>Status : </b> <br>\n\n             {{proj.status==\'P\' ? \'Open\' : \'Completed\'}}\n\n          </ion-card-content>\n\n          \n\n          <ion-row>\n\n            <ion-col>&nbsp;</ion-col>\n\n            <ion-col>\n\n                <button ion-button color="danger" (click)="delete(proj.key)">Delete</button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button *ngIf="proj.status!=\'P\'"  ion-button color="default" (click)="reOpen(proj.key)">Re-Open</button>\n\n                <button *ngIf="proj.status==\'P\'" ion-button color="secondary" (click)="close(proj.key)">Complete</button>\n\n            </ion-col>\n\n            \n\n          </ion-row>\n\n        </ion-card>\n\n      </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<!--ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Task Name:</ion-label>\n\n      <ion-input type="text" [(ngModel)]="projectNotes" name="projectNotes" required="*"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Description:</ion-label>\n\n      <ion-input type="text" [(ngModel)]="messages" name="messages" required="*"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Assignee:</ion-label>\n\n      <ion-input type="text" [(ngModel)]="taskOwner" name="taskOwner" required="*"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button ion-button full round color="secondary" type="submit">Enter</button>\n\n    </ion-item>\n\n  </ion-list-->\n\n\n\n\n\n'/*ion-inline-end:"C:\pronto\pronto-do\src\pages\projects-notes\projects-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProjectsNotesPage);
    return ProjectsNotesPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=projects-notes.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_notes_projects_notes__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_projects_add_projects__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_projects_edit_projects__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
var ProjectsPage = /** @class */ (function () {
    function ProjectsPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { username: "" };
        this.projects = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('projects/');
        this.ref.on('value', function (resp) {
            _this.projects = [];
            _this.projects = snapshotToArray(resp);
        });
    }
    ProjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectsPage');
    };
    ProjectsPage.prototype.addProjects = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_projects_add_projects__["a" /* AddProjectsPage */]);
    };
    ProjectsPage.prototype.goToProject = function (key, text) {
        var me = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__projects_notes_projects_notes__["a" /* ProjectsNotesPage */], { projectKey: key, userId: me.userId, projectName: text });
    };
    ProjectsPage.prototype.delete = function (selectedItem) {
        this.ref.child(selectedItem).remove();
    };
    ProjectsPage.prototype.edit = function (selectedItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_projects_edit_projects__["a" /* EditProjectsPage */], { selectedKey: selectedItem });
    };
    ProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projects',template:/*ion-inline-start:"C:\pronto\pronto-do\src\pages\projects\projects.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton=false>\n\n    <ion-title>Projects</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="signOut()">\n\n        Leave\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addProjects()">\n\n        <ion-icon name="add-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let proj of projects">\n\n      <ion-item>\n\n          {{proj.projectName}}\n\n          <ion-icon name="md-open" item-end (click)="goToProject(proj.key,proj.projectName)"></ion-icon>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n          <button ion-button expandable (click)="edit(proj.key)">Edit</button>\n\n          <button ion-button color="danger" expandable (click)="delete(proj.key)">Delete</button>\n\n       </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\pronto\pronto-do\src\pages\projects\projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProjectsPage);
    return ProjectsPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects__ = __webpack_require__(144);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__projects_projects__["a" /* ProjectsPage */], {
            useraname: this.data.username
        });
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\pronto\pronto-do\src\pages\sign-in\sign-in.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Signin</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="enterUserName()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Enter user name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="data.username" name="username" required=""></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button ion-button full round color="secondary" type="submit">Enter</button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\pronto\pronto-do\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-notes/add-notes.module": [
		435,
		5
	],
	"../pages/add-projects/add-projects.module": [
		436,
		4
	],
	"../pages/edit-projects/edit-projects.module": [
		437,
		3
	],
	"../pages/projects-notes/projects-notes.module": [
		438,
		2
	],
	"../pages/projects/projects.module": [
		439,
		1
	],
	"../pages/sign-in/sign-in.module": [
		440,
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
webpackAsyncContext.id = 195;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(301);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_projects_notes_projects_notes__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_projects_add_projects__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_sign_in__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_projects_projects__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_projects_edit_projects__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_notes_add_notes__ = __webpack_require__(140);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_add_projects_add_projects__["a" /* AddProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_projects_notes_projects_notes__["a" /* ProjectsNotesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_projects_edit_projects__["a" /* EditProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_notes_add_notes__["a" /* AddNotesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-notes/add-notes.module#AddNotesPageModule', name: 'AddNotesPage', segment: 'add-notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-projects/add-projects.module#AddProjectsPageModule', name: 'AddProjectsPage', segment: 'add-projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-projects/edit-projects.module#EditProjectsPageModule', name: 'EditProjectsPage', segment: 'edit-projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects-notes/projects-notes.module#ProjectsNotesPageModule', name: 'ProjectsNotesPage', segment: 'projects-notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_projects_add_projects__["a" /* AddProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_projects_notes_projects_notes__["a" /* ProjectsNotesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_projects_edit_projects__["a" /* EditProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_projects_notes_projects_notes__["a" /* ProjectsNotesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_notes_add_notes__["a" /* AddNotesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sign_in_sign_in__ = __webpack_require__(145);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\pronto\pronto-do\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\pronto\pronto-do\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\pronto\pronto-do\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\pronto\pronto-do\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map