import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent implements OnInit {
  constructor(private cfr: ComponentFactoryResolver) {}

  componentRef: ComponentRef<DynamicChildComponent>;

  @ViewChild('dlContainer', { read: ViewContainerRef })
  container: ViewContainerRef;

  addComponent() {
    const com = this.cfr.resolveComponentFactory(DynamicChildComponent);
    this.componentRef = this.container.createComponent(com);
    this.componentRef.instance.type = 'etqwtwt';
    this.componentRef.instance.output.subscribe((msg: string) =>
      console.log(msg)
    );
  }

  ngOnInit() {}
}
