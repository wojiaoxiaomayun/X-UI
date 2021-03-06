import Color from "colorjs.io"
export const ColorMix = (color1,color2,weight = 0) => {
    if(weight > 1) weight = 1;
    if(weight < 0) weight = 0;
    let color1Obj = new Color(color1);
    let color2Obj = new Color(color2);
    return new Color(`rgb(${(color1Obj.srgb[0] * weight + color2Obj.srgb[0] * (1 - weight)) * 255},${(color1Obj.srgb[1] * weight + color2Obj.srgb[1] * (1 - weight)) * 255},${(color1Obj.srgb[2] * weight + color2Obj.srgb[2] * (1 - weight)) * 255})`).hex;
}

export const guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}