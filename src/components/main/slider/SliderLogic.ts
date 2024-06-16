  type Slide = {
    id: number;
    src: string;
    alt: string;
  };

type ImgText = {
  logoSrc: string;
  alt: string;
}

  type SlideText = {
    id: number;
    logoImg?:ImgText;
    text: string;
    button: string;
  };
  
  type ImagesArray = Slide[];
  type TextArray = SlideText[];