import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteDirective } from 'src/app/directives/admin/delete.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { DialogModule } from 'src/app/dialogs/dialog.module';
import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';




@NgModule({
  declarations: [
    ProductComponent,
    CreateComponent,
    ListComponent,
    DeleteDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: ProductComponent }
    ]), MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule,
     MatTableModule, MatPaginatorModule, MatDialogModule,DialogModule,
    FileUploadModule
  ]
})
export class ProductModule { }
