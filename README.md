# NgxCurrencyFormatter

I made this library because i needed a component (as simple as possible) that just renders the 
value in my input field as if it was piped through the currency pipe.
It does accept the options code and digit which are passed throught to the durrency pipes 
properties.
  

### Demo 
https://druckreich.github.io/ngx-currency-formatter-library

## How to Use

##### How to install dependencies
```` Bash
npm install ng-currency-formatter
````

##### How to import Module
```` Typescript
import {NgxCurrencyFormatterModule} from 'ng-currency-formatter'

@NgModule({
  imports: [
    NgxCurrencyFormatterModule,
  ]
})
````

##### How to use formatter on input
```` HTML
<input type="text" ngxCurrencyFormatter [(ngModel)]="value">
````

##### How to use different locale and digit

```` HTML
<input type="text" ngxCurrencyFormatter [code]="'EUR'">
````

```` Code
<input type="text" ngxCurrencyFormatter [digit]="'1.4'">
````


##### How to use validator on input
```` HTML
<input type="text" ngxCurrencyFormatter [(ngModel)]="value" ngxCurrencyValidator>
````

##### How to use custom validator error message
```` Typescript
@NgModule({
  providers: [
    {provide: 'ngxCurrencyConfig', useValue: {message: 'I do not like this number, Sir!'}},
  ]
})
````

 




