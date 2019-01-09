import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentListService {

  componentList = [
    {
      type: 'General',
      list: [
        { name: 'Button 按钮', path: 'button' },
        { name: 'Icon 图标', path: 'icon' }
      ]
    },
    {
      type: 'Layout',
      list: [
        { name: 'Grid 栅格', path: 'grid' },
        { name: 'Layout 布局', path: 'layout' }
      ]
    },
    {
      type: 'Navigation',
      list: [
        { name: 'Affix 固钉', path: 'affix' },
        { name: 'Breadcrumb 面包屑', path: 'breadcrumb' },
        { name: 'Dropdown 下拉菜单', path: 'dropdown' },
        { name: 'Menu 导航菜单', path: 'menu' },
        { name: 'Pagination 分页', path: 'pagination' },
        { name: 'Steps 步骤条', path: 'steps' }
      ]
    },
    {
      type: 'Data Entry',
      list: [
        { name: 'AutoComplete', path: 'autoComplete' },
        { name: 'Cascader', path: 'cascader' },
        { name: 'Checkbox', path: 'checkbox' },
        { name: 'DatePicker', path: 'datePicker' },
        { name: 'Form', path: 'form' },
        { name: 'Input', path: 'input' },
        { name: 'InputNumber', path: 'inputNumber' },
        { name: 'Mention', path: 'mention' },
        { name: 'Radio', path: 'radio' },
        { name: 'Rate', path: 'rate' },
        { name: 'Select', path: 'select' },
        { name: 'Slider', path: 'slider' },
        { name: 'Switch', path: 'switch' },
        { name: 'TimePicker', path: 'timePicker' },
        { name: 'Transfer', path: 'transfer' },
        { name: 'TreeSelect', path: 'treeSelect' },
        { name: 'Upload', path: 'upload' }
      ]
    },
    {
      type: 'Data Display',
      list: [
        { name: 'Avatar', path: 'avatar' },
        { name: 'Badge', path: 'badge' },
        { name: 'Calendar', path: 'calendar' },
        { name: 'Card', path: 'card' },
        { name: 'Carousel', path: 'carousel' },
        { name: 'Collapse', path: 'collapse' },
        { name: 'List', path: 'list' },
        { name: 'Popover', path: 'popover' },
        { name: 'Table', path: 'table' },
        { name: 'Tabs', path: 'tabs' },
        { name: 'Tag', path: 'tag' },
        { name: 'Timeline', path: 'timeline' },
        { name: 'Tooltip', path: 'tooltip' },
        { name: 'Tree', path: 'tree' }
      ]
    },
    {
      type: 'Feedback',
      list: [
        { name: 'Alert', path: 'alert' },
        { name: 'Drawer', path: 'drawer' },
        { name: 'Message', path: 'message' },
        { name: 'Modal', path: 'modal' },
        { name: 'Notification', path: 'notification' },
        { name: 'Popconfirm', path: 'popconfirm' },
        { name: 'Progress', path: 'progress' },
        { name: 'Spin', path: 'spin' }
      ]
    },
    {
      type: 'Other',
      list: [
        { name: 'Anchor', path: 'anchor' },
        { name: 'BackTop', path: 'backtop' },
        { name: 'Divider', path: 'divider' }
      ]
    }
  ]

  constructor() { }
}
