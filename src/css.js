const string = `
.skin * {box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before,.skin *::after {box-sizing: border-box;}
.skin {
  position: relative;
  background: #ffe600;
  min-height: 50vh;
}
.nose {
  border: 10px solid black;
  border-color: black transparent transparent;
  height: 0px;
  width: 0px;
  position: relative;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes wave {
  0% {transform: rotate(0deg);}
  33% {transform: rotate(5deg);}
  66% {transform: rotate(-5deg);}
  100% {transform: rotate(0deg);}
}
.nose:hover {
  animation: wave 300ms infinite linear;
}
.yuan {
  position: absolute;
  width: 20px;
  height: 6px;
  margin-left: -10px;
  top: -16px;
  border-radius: 10px 10px 0 0;
  background: black;
}
.eye {
  border: 2px solid black;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.eye {
  animation: eye 2s ease-out infinite;
  -webkit-animation: eye 2s ease-out infinite;
}
@keyframes eye {
  0% {opacity: 1;}
  5% {opacity: 0;}
  10% {opacity: 1;}
}
.eye::before {
  content: "";
  display: block;
  border: 3px solid black;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 4px;
  top: 2px;
}
.eye.left {
  transform: translate(-100px);
}
.eye.right {
  transform: translate(100px);
}
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}

.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}
.mouth .up .lip {
  border: 3px solid black;
  height: 30px;
  width: 100px;
  background: #ffe600;
  border-top-color: transparent;
  position: relative;
  position: absolute;
  margin-left: -50px;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  border-right-color: transparent;
  transform: rotate(-15deg) translateX(-52px);
  left: 50%;
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0px;
  border-left-color: transparent;
  transform: rotate(15deg) translateX(52px);
  left: 50%;
}
.mouth .up .lip::before {
  content: "";
  display: block;
  width: 9px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}
.mouth .up .lip.left::before {
  right: -6px;
}
.mouth .up .lip.right::before {
  left: -6px;
}

.mouth .up .lip::after {
  content: "";
  display: block;
  width: 100px;
  height: 2px;
  position: absolute;
  bottom: 26px;
  background: #ffe600;
}
.mouth .up .lip.left::after {
  right: -6px;
}
.mouth .up .lip.right::after {
  left: -6px;
}

.mouth .down {
  height: 170px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}
.mouth .down .yuan1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  width: 200px;
  height: 300px;
  background: #ff485f;
  position: absolute;
  bottom: -158px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}

.face {
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top: 190px;
  margin-left: -44px;
  z-index: 3;
}
.face > img {
  position: absolute;
  top: 50%;
  left: 50%;
}

.face.left {
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50%;
}
.face.left > img {
  transform: rotateY(180deg);
  transform-origin: 0 0;
}
.face.right {
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50%;
}`;
export default string;
