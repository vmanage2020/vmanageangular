import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArchwizardModule } from 'angular-archwizard';
import { NgxEditorModule } from 'ngx-editor';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { UiSwitchModule } from 'ngx-ui-switch';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgSelectModule } from '@ng-select/ng-select';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxMaskModule } from 'ngx-mask';

import { FormRoutingModule } from './form-routing.module';

import { UIModule } from '../../shared/ui/ui.module';

import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { SummernoteComponent } from './summernote/summernote.component';
import { WizardComponent } from './wizard/wizard.component';
import { AdvancedformComponent } from './advancedform/advancedform.component';
import { UploadsComponent } from './uploads/uploads.component';
import { ImagecropComponent } from './imagecrop/imagecrop.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ElementsComponent, ValidationComponent, SummernoteComponent, WizardComponent, AdvancedformComponent, UploadsComponent, ImagecropComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    UIModule,
    FormRoutingModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    ColorPickerModule,
    UiSwitchModule,
    ImageCropperModule,
    FileUploadModule,
    ArchwizardModule,
    NgSelectModule,
    NgxMaskModule.forRoot()
  ]
})
export class FormModule { }
