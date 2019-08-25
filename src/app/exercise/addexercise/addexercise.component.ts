import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MaterialService} from "../../services/material.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-addexercise',
    templateUrl: './addexercise.component.html',
    styleUrls: ['./addexercise.component.scss']
})
export class AddexerciseComponent implements OnInit {
    private _matid;
    private _courseid;
    private _material;

    constructor(
        private materialService: MaterialService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this._matid = params.get("materialid");
            this._courseid = params.get("courseid");
        });

        this.setMaterial();
    }

    async setMaterial() {
        await this.materialService.getMaterialFromDb(this._matid);
        this._material = this.materialService.material;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }

        this.router.navigate(['/index']);

        form.reset();

    }

}
