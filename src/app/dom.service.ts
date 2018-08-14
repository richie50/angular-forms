import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef
} from '@angular/core';


interface ChildConfig{
  inputs:object,
  outputs:object
}

@Injectable()

export class DOMServices {
    private childComponentRef:any;

    constructor(
        private compFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ){

    }

    public appendComponentTo(parentId:string , child:any , childConfig?: ChildConfig){
        //creates a component reference from the component
        const childComponentRef = this.compFactoryResolver.resolveComponentFactory(child).create(this.injector);
        //attach the configs , in and outs
        this.attachConfig(childConfig , childComponentRef);
        
    }

    private attachConfig(config , componentRef){
        let inputs = config.inputs;
        let outputs = config.outputs;

        for(let key in inputs){
            componentRef.instance[key] =  inputs[key];
        }
        for(let key in outputs){
            componentRef.instance[key] =  outputs[key];
        }
    }
}