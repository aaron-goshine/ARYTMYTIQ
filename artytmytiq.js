/*
*Copyright (C) 2011 by Goshine Design of Aaron Goshine
*AUTHOR:Aaron Goshine
*Permission is hereby granted, free of charge, to any person obtaining a copy
*of this software and associated documentation files (the "Software"), to deal
*in the Software without restriction, including without limitation the rights
*to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*copies of the Software, and to permit persons to whom the Software is
*furnished to do so, subject to the following conditions:

*The above copyright notice and this permission notice shall be included in
*all copies or substantial portions of the Software.

*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*THE SOFTWARE.
*/
/* test array */ 
// loaded with random numbers random number
var mainArray = [ 26, 103, 102, 1, 2, 559, 538, 676, 29, 537, 516, 540, 13, 650];
/***********

/*properties
    abs, averValue, commaFmt, console, currencyFmt, customIndexOf, log, max, 
    maxOfArray, midValue, min, minOfArray, random, round, split, toString
*/

/*jslint browser: true, white: true, maxerr: 50, indent: 4 */

(function () {
    'use strict';
/**     */

    function ARYTMYTIQ(args) {
		
		this.version = 1.0;
		this.name = "ARYTMYTIQ";
		this.agrs = arguments;
        var that = this;
		if (!(this instanceof ARYTMYTIQ)){
			
			return new ARYTMYTIQ(args);
			
			}
	

		
    }
	
    ARYTMYTIQ.prototype = Math;
	 /**
     *@console
     *Message to console
     */
    ARYTMYTIQ.prototype.manAgrs = function (){
		var argArr = [];
		argArr = argArr.concat(this.agrs);
		return argArr;
	}

    /**
     *@console
     *Message to console
     */
    ARYTMYTIQ.prototype.console = function (message) {
        console.log(message);
    };
    /**
     *@Paramiter{Array}
     *Max value of list 
     */
    ARYTMYTIQ.prototype.maxOfArray = function (arr) {
       
        var maxValue = this.max.apply(null, arr);

        return maxValue;
    };
    /**
     *@Paramiter{Array}
     *minvalue of the list
     */
    ARYTMYTIQ.prototype.minOfArray = function (arr) {
        
        var minValue = this.min.apply(null, arr);
        return minValue;
    };
    /**
     *@Paramiter{Array}
     *midValue (Array) :return middle value/s
     */
    ARYTMYTIQ.prototype.midValue = function (arr) {
		var trackerArry = [],that = this,modIndexArr;
		trackerArry = (trackerArry.concat(arr)).sort(function (a, b) {
            return (a > b) ? 1 : -1;
        });
		
        
       modIndexArr = function () {
                
                var intModIndex = that.round(trackerArry.length / 2),
                    basiArr = [];

                if (that.round(trackerArry.length % 2) < 1) {

                    basiArr[0] = trackerArry[intModIndex - 1];
                    basiArr[1] = trackerArry[intModIndex];

                    return basiArr;

                } else {

                    basiArr[0] = trackerArry[intModIndex - 1];

                    return basiArr;
                }
            };


        return modIndexArr();

        //trackerArry.length
        //---------
    };
    /**
     *@Paramiter{Array}
     *midValue (Array) :return Average
     */
    ARYTMYTIQ.prototype.averValue = function (arr) {
		var innerLength = arr.length,trackerNumber = 0,i;

 for (i = 0; i < innerLength; i += 1) {

            trackerNumber += arr[i];

        }

        return trackerNumber / innerLength;

    };
 /**
     *@Paramiter{Array}
     *addValue (Array) :return Average
     */
    ARYTMYTIQ.prototype.add = function (arr) {
		var innerLength = arr.length,trackerNumber = 0,i;

 for (i = 0; i < innerLength; i += 1) {

            trackerNumber += arr[i];

        }

        return trackerNumber;

    };
	 /**
     *@Paramiter{Array}
     *addValue (Array) :return Average
     */
    ARYTMYTIQ.prototype.minus= function (arr) {
		var innerLength = arr.length,trackerNumber = 0,i;

 for (i = 0; i < innerLength; i += 1) {

             arr[i] - (arr[i-1] || 0) ;

        }

        return trackerNumber;

    };
    /**
     *customIndexOf (Array,index):return intemAtindex;
     */
    ARYTMYTIQ.prototype.customIndexOf = function (arr, inx) {
        
		if (inx < arr.length) {
            var iArr = [];
            iArr = iArr.concat(arr);
            return iArr.splice(inx, 1);
        } else {
            return null;
        }
    };
    /**
     *randomiseArr(Array):return array containing ramdom sort
     *
     */
    ARYTMYTIQ.prototype.customIndexOf = function (arr) {
        var locArr = [];
        locArr = locArr.concat(arr);
        //randomise array
        locArr.sort((this.round(this.random()) - 0.5));
        return locArr;
    };
    /**
     *currencyFmt(Nmber):return decimal format for currency value
     */

    ARYTMYTIQ.prototype.currencyFmt = function (value) {
     

        var ftValue = parseFloat(value),
            minus = "",
            ftValueToStr = "";

        if (isNaN(ftValue)) {
            ftValue = 0.00;
            return ftValue;
        }

        if (ftValue < 0) {
            minus = '-';
        }

        ftValue = this.abs(ftValue);
        ftValue = parseInt(((ftValue + 0.0009) * 100), 10);
        ftValue = ftValue / 100;

        ftValueToStr = ftValue.toString();

        if (ftValueToStr.indexOf('.') < 0) {
            ftValueToStr += '.00';
        }
        if (ftValueToStr.indexOf('.') === (ftValueToStr.length - 2)) {
            ftValueToStr += '0';
        }
        ftValueToStr = minus + ftValueToStr;
        return ftValueToStr;
    };

    /**
     *
     */
    ARYTMYTIQ.prototype.commaFmt = function (value) {
        var valueString = value.toString(),
            valueSplitArr = valueString.split('.', 2),
            intOfIndexSnd = valueSplitArr[1],
            intOfIndexFirst = parseInt(valueSplitArr[0],10),
            minus = '',
            strCast = "",
            subArr = [],
            subLength, subArrRev = [],
            xtracker = 0,
            returnValue,i,tracker;

        if (isNaN(intOfIndexFirst)) {
            return;
        }

        if (intOfIndexFirst < 0) {
            minus = '-';
        }

        intOfIndexFirst = this.abs(intOfIndexFirst);
        strCast = intOfIndexFirst.toString();
        subArr = strCast.split("");
        subLength = subArr.length;
        subArrRev = subArrRev.concat(subArr);
        subArrRev.reverse();

        for (i = 0; i < subLength; i += 1) {
            tracker = (i + 1);

            if ((tracker % 3) === 0) {
                subArrRev.splice(tracker + xtracker, 0, ",");
                xtracker += 1;
            }

        }


        if (subArrRev[subArrRev.length - 1] === ",") {
            subArrRev.splice(subArrRev.length - 1, 1);
        };

        subArrRev.reverse();

        returnValue = minus + (subArrRev.join("")) + '.' + intOfIndexSnd;

        return returnValue;

    };
   
	/***** --- *****/
window.ARQ = ARYTMYTIQ 
})();
/**
 *useage*/