import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components/components.component';
import { AppRoutingModule } from './routers/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ButtonComponent } from './components/components/button/button.component';
import { IconComponent } from './components/components/icon/icon.component';
import { GridComponent } from './components/components/grid/grid.component';
import { LayoutComponent } from './components/components/layout/layout.component';
import { AffixComponent } from './components/components/affix/affix.component';
import { DropdownComponent } from './components/components/dropdown/dropdown.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MenuComponent } from './components/components/menu/menu.component';
import { PaginationComponent } from './components/components/pagination/pagination.component';
import { StepsComponent } from './components/components/steps/steps.component';
import { AutoCompleteComponent } from './components/components/auto-complete/auto-complete.component';
import { CascaderComponent } from './components/components/cascader/cascader.component';
import { CheckboxComponent } from './components/components/checkbox/checkbox.component';
import { DatePickerComponent } from './components/components/date-picker/date-picker.component';
import { FormComponent } from './components/components/form/form.component';
import { InputComponent } from './components/components/input/input.component';
import { InputNumberComponent } from './components/components/input-number/input-number.component';
import { RadioComponent } from './components/components/radio/radio.component';
import { SelectComponent } from './components/components/select/select.component';
import { SwitchComponent } from './components/components/switch/switch.component';
import { UploadComponent } from './components/components/upload/upload.component';
import { AvatarComponent } from './components/components/avatar/avatar.component';
import { CardComponent } from './components/components/card/card.component';
import { CarouselComponent } from './components/components/carousel/carousel.component';
import { ListComponent } from './components/components/list/list.component';
import { TableComponent } from './components/components/table/table.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ButtonComponent,
    IconComponent,
    GridComponent,
    LayoutComponent,
    AffixComponent,
    DropdownComponent,
    PageNotFoundComponent,
    MenuComponent,
    PaginationComponent,
    StepsComponent,
    AutoCompleteComponent,
    CascaderComponent,
    CheckboxComponent,
    DatePickerComponent,
    FormComponent,
    InputComponent,
    InputNumberComponent,
    RadioComponent,
    SelectComponent,
    SwitchComponent,
    UploadComponent,
    AvatarComponent,
    CardComponent,
    CarouselComponent,
    ListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
