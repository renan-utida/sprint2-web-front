import styled from "styled-components";

export const MainHome = styled.main`

    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);
    grid-auto-rows: 150px;
    grid-template-areas:
        'slideshow  slideshow   slideshow   slideshow'
        'slideshow  slideshow   slideshow   slideshow'
        'slideshow  slideshow   slideshow   slideshow'
        'slideshow  slideshow   slideshow   slideshow'
        'recente    recente     recente     recente'
        'noticia1   noticia1    noticia1    info-extra'
        'noticia1   noticia1    noticia1    info-extra'
        'noticia2   noticia2    noticia2    info-extra'
        'noticia2   noticia2    noticia2    info-extra'
        'noticia3   noticia3    noticia3    info-extra'
        'noticia3   noticia3    noticia3    info-extra'
        'noticia4   noticia4    noticia4    info-extra'
        'noticia4   noticia4    noticia4    info-extra'
        'noticia5   noticia5    noticia5    info-extra'
        'noticia5   noticia5    noticia5    info-extra'
    ;

    .recente{
        grid-area: recente;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        
        h2{
            color: #DD0606;
            font-size: 2.7em;
            margin: 20px 35px;
        }
    }

    .info1{
        grid-area: noticia1;
        background-color: blue;
    }

    .info2{
        grid-area: noticia2;
        background-color: red;
    }

    .info3{
        grid-area: noticia3;
        background-color: orange;
    }

    .info4{
        grid-area: noticia4;
        background-color: aqua;
    }

    .info5{
        grid-area: noticia5;
        background-color: darkgreen;
    }
    .info-extra{
        grid-area: info-extra;
        background-color: darkblue;
    }
`

export const SlideshowContainer = styled.section`
  width: 100%;
  position: relative;
  grid-area: slideshow;
  overflow: hidden;
`

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gradient-overlay{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0) 100%);
  }

  h1{
      position: absolute;
      bottom: 60px;
      left: 20px;
      color: #fff;
      font-size: 32px;
      font-weight: bold;
  }

  p{
      position: absolute;
      bottom: 30px;
      left: 20px;
      color: #fff;
      font-size: 18px;
  }

  .numeracao-slide{
      position: absolute;
      top: 10px;
      left: 10px;
      color: #fff;
      font-size: 14px;
  }
`


export const PrevButton = styled.a`
  cursor: pointer;
  position: absolute;
  top: 45%;
  left: 0;
  font-size: 24px;
  color: white;
  padding: 16px;
  user-select: none;
  transition: 0.6s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const NextButton = styled.a`
  cursor: pointer;
  position: absolute;
  top: 45%;
  right: 0;
  font-size: 24px;
  color: white;
  padding: 16px;
  user-select: none;
  transition: 0.6s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const DotsContainer = styled.div`
  text-align: center;
  position: relative;
  bottom: 20px;
`

export const Dot = styled.span`
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${props => (props.$active ? '#515151' : '#999999')};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  cursor: pointer;
`