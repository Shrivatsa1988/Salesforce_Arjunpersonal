({
    afterScriptsLoaded: function(component, event, helper) {
        var map = new Highcharts.Map({
            chart: {
                renderTo: component.find("map").getElement()
            },
            series: [{
                "type": "map",
                "data": [{
                    "name": "g3776",
                    "path": "M343,-165,342,-150,359,-130,356,-115,381,-91,397,-92,422,-113,428,-162,395,-157,372,-158,343,-165zM419,-192,425,-175,434,-169,440,-182,419,-192z"
                }, {
                    "name": "Western Australia",
                    "path": "M10,-547,84,-595,145,-602,195,-616,238,-694,302,-742,343,-769,391,-737,391,-302,317,-282,264,-263,253,-245,166,-240,112,-213L67,-214,41,-245,60,-266,55,-314,45,-332,0,-442,24,-452,2,-501z"
                }, {
                    "name": "Northern Territory",
                    "path": "M486,-823,467,-809,431,-802,412,-768,391,-737,391,-447,616,-449,616,-697,553,-742,586,-809z"
                }, {
                    "name": "Queensland",
                    "path": "M616,-695,662,-666,693,-687,707,-735,710,-814,728,-849,759,-751,779,-756,802,-726,821,-637,884,-599,909,-540,936,-537,950,-504,981,-468,1000,-387,967,-385,953,-368,936,-380,903,-383,895,-373,693,-373,693,-447,616,-451z"
                }, {
                    "name": "New South Wales",
                    "path": "M917,-147,929,-209,960,-261,991,-304,1000,-387,964,-380,955,-370,936,-380,907,-383,895,-373,693,-373,690,-240,729,-228,750,-223,788,-182,800,-194,871,-183,876,-161z"
                }, {
                    "name": "path3788",
                    "path": "M883,-204,903,-183,910,-199,893,-211z"
                }, {
                    "name": "Victoria",
                    "path": "M391,-304,455,-302,519,-271,557,-218,616,-269,605,-235,583,-201,612,-202,622,-223,628,-197,648,-192,688,-130,690,-240,693,-447,614,-449,391,-451z"
                }, {
                    "name": "Victoria",
                    "path": "M817,-113,855,-125,917,-147,876,-161,869,-183,800,-194,788,-182,748,-223,690,-249,688,-130,752,-116,786,-132z"
                }]
            }, {
                "type": "mapline",
                "data": [{
                    "name": "path3790",
                    "path": "M243,-168,316,-240,457,-238,540,-152,540,-152"
                }]
            }]
        });
    }
})