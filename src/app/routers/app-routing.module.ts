import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsComponent } from "../components/components/components.component";
import { ButtonComponent } from "../components/components/button/button.component";
import { IconComponent } from "../components/components/icon/icon.component";
import { GridComponent } from "../components/components/grid/grid.component";
import { LayoutComponent } from "../components/components/layout/layout.component";
import { AffixComponent } from "../components/components/affix/affix.component";
import { DropdownComponent } from "../components/components/dropdown/dropdown.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { MenuComponent } from "../components/components/menu/menu.component";
import { PaginationComponent } from "../components/components/pagination/pagination.component";
import { StepsComponent } from "../components/components/steps/steps.component";
import { AutoCompleteComponent } from "../components/components/auto-complete/auto-complete.component";
import { CascaderComponent } from "../components/components/cascader/cascader.component";
import { CheckboxComponent } from "../components/components/checkbox/checkbox.component";
import { DatePickerComponent } from "../components/components/date-picker/date-picker.component";
import { FormComponent } from "../components/components/form/form.component";
import { InputComponent } from "../components/components/input/input.component";
import { InputNumberComponent } from "../components/components/input-number/input-number.component";
import { RadioComponent } from "../components/components/radio/radio.component";
import { SelectComponent } from "../components/components/select/select.component";
import { SwitchComponent } from "../components/components/switch/switch.component";
import { UploadComponent } from "../components/components/upload/upload.component";
import { AvatarComponent } from "../components/components/avatar/avatar.component";
import { CardComponent } from "../components/components/card/card.component";
import { CarouselComponent } from "../components/components/carousel/carousel.component";
import { ListComponent } from "../components/components/list/list.component";
import { TableComponent } from "../components/components/table/table.component";

const routes: Routes = [
  {
    path: 'components',
    component: ComponentsComponent,
    children: [
      { path: 'button', component: ButtonComponent },
      { path: 'icon', component: IconComponent },
      { path: 'grid', component: GridComponent },
      { path: 'layout', component: LayoutComponent },
      { path: 'affix', component: AffixComponent },
      { path: 'dropdown', component: DropdownComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'steps', component: StepsComponent },
      { path: 'autoComplete', component: AutoCompleteComponent },
      { path: 'cascader', component: CascaderComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'datePicker', component: DatePickerComponent },
      { path: 'form', component: FormComponent },
      { path: 'input', component: InputComponent },
      { path: 'inputNumber', component: InputNumberComponent },
      { path: 'radio', component: RadioComponent },
      { path: 'select', component: SelectComponent },
      { path: 'switch', component: SwitchComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'avatar', component: AvatarComponent },
      { path: 'card', component: CardComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'list', component: ListComponent },
      { path: 'table', component: TableComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  },
  {
    path: '',
    redirectTo: '/components',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }