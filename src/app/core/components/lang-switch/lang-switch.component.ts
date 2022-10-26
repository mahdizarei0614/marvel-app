import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {isDesktop} from "../../../app.component";

@Component({
  selector: 'app-lang-switch',
  templateUrl: './lang-switch.component.html',
  styleUrls: ['./lang-switch.component.scss']
})
export class LangSwitchComponent {
  public isDesktopRef = isDesktop;

  constructor(public translate: TranslateService) {
  }

}
