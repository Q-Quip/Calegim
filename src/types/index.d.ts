declare module "*.module.css" {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  
  declare module "*.module.scss" {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  
  declare module "*.module.sass" {
    const classes: { readonly [key: string]: string };
    export default classes;
  }

  declare module '*.webp' {
    const value: any;
    export default value;
  }

  declare module '*.avif' {
    const value: any;
    export default value;
  }

  declare module '*.svg' {
    const value: any;
    export default value;
  }

  declare module '*.tsx' {
    const value: React.ComponentType<any>;
    export default value;
  }
  