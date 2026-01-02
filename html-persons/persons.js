class MPerson extends HTMLElement {
    constructor() {
        if (this.innerHTML.trim() == '')
            this.innerHTML = `<div style="display: inline-block; position: relative; width: 180px; height: 542px;">
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(116px 317px 277px 185px); transform: translate(-185px, -116px) translate(23px, 57px);">
    </div>
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(292px 302px 408px 202px); transform: translate(-202px, -292px) translate(40px, 202px);">
    </div>
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(0px 292px 97px 212px); transform: translate(-212px, 0px) translate(50px, 0px);">
    </div>
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(257px 362px 387px 312px); transform: translate(-312px, -257px) translate(87px, 307px);">
    </div>
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(397px 387px 542px 312px); transform: translate(-312px, -397px) translate(87px, 390px);">
    </div>
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(257px 187px 387px 137px); transform: translate(-137px, -257px) translate(38px, 306px);">
    </div>
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(397px 187px 542px 116px); transform: translate(-116px, -397px) translate(17px, 389px);">
    </div>
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(427px 297px 473px 198px); transform: translate(-198px, -427px) translate(38px, 307px);">
    </div>
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(52px 417px 182px 377px); transform: translate(-377px, -52px) translate(114px, 106px);">
    </div>
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(191px 432px 346px 377px); transform: translate(-377px, -191px) translate(114px, 197px);">
    </div>
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(52px 121px 182px 81px); transform: translate(-81px, -52px) translate(20px, 104px);">
    </div>
    <div>
        <img src="./m(sep).png" class="body-part" style="clip-path: rect(191px 122px 347px 67px); transform: translate(-67px, -191px) translate(7px, 197px);">
    </div>
</div>`.replace('./m(sep).png', 'https://onu032001.github.io/html-persons/html-persons/m(sep).png');
    }
}
class FPerson extends HTMLElement {
    constructor() {
        if (this.innerHTML.trim() == '')
            this.innerHTML = `<div style="display: inline-block; position: relative; width: 180px; height: 542px;">
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(116px 317px 277px 185px); transform: translate(-185px, -116px) translate(23px, 57px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(292px 302px 408px 202px); transform: translate(-202px, -292px) translate(40px, 202px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(0px 292px 97px 212px); transform: translate(-212px, 0px) translate(50px, 0px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(257px 362px 387px 312px); transform: translate(-312px, -257px) translate(87px, 307px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(397px 387px 542px 312px); transform: translate(-312px, -397px) translate(87px, 390px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(257px 187px 387px 137px); transform: translate(-137px, -257px) translate(38px, 306px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(397px 187px 542px 116px); transform: translate(-116px, -397px) translate(17px, 389px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(427px 297px 473px 198px); transform: translate(-198px, -427px) translate(38px, 307px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(7px 167px 123px 22px); transform: translate(-22px, -7px) translate(20px, 306px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(52px 417px 182px 377px); transform: translate(-377px, -52px) translate(114px, 106px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(191px 432px 346px 377px); transform: translate(-377px, -191px) translate(114px, 197px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(123px 182px 252px 142px); transform: translate(-142px, -123px) translate(20px, 104px);">
    </div>
    <div>
        <img src="./f(sep).png" class="body-part" style="clip-path: rect(191px 122px 347px 67px); transform: translate(-67px, -191px) translate(7px, 197px);">
    </div>
</div>`.replace('./f(sep).png', 'https://onu032001.github.io/html-persons/html-persons/f(sep).png');
    }
}
class PersonModifierCSS {
    constructor() {
        this.iden = [
            [1,0,0,0],
            [0,1,0,0],
            [0,0,1,0],
            [0,0,0,1]
        ];
    }
    multiplyMatrix(mat1, mat2) {
        const rows1 = mat1.length;
        const cols1 = mat1[0].length;
        const rows2 = mat2.length;
        const cols2 = mat2[0].length;
        
        if (cols1 != rows2) {
            throw new TypeError("");
        }

        const result = new Array(rows1);
        for (let index = 0; index < rows1; index++) {
            result[index] = new Array(cols2).fill(0);
        }

        for (let rowIndex = 0; rowIndex < rows1; rowIndex++) {
            for (let colIndex = 0; colIndex < cols2; colIndex++) {
                let sum = 0;
                for (let index = 0; index < cols1; index++) {
                    sum += mat1[rowIndex][index] * mat2[index][colIndex];
                }
                result[rowIndex][colIndex] = sum;
            }
        }
        
        return result;
    }

    replaceMatrix(mat) {
        return String(mat);
    }

    rotate(angle) {
        return [
            [Math.cos(angle), -Math.sin(angle), 0, 0],
            [Math.sin(angle), Math.cos(angle), 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ];
    }

    translate(x, y) {
        return [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [x, y, 0, 1]
        ];
    }

    scale(x, y) {
        return [
            [x, 0, 0, 0],
            [0, y, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ];
    }
}

const personModifier = new PersonModifierCSS();
customElements.define('m-person', MPerson);
customElements.define('f-person', FPerson);
