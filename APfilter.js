function APStartsWith() {
    return function (input, conditions) {
        var output = [];
        var flag;
        if (input != undefined) {
            for (item of input) {
                flag = true;
                for (property in conditions) {
                    if (start_object[property] != undefined) {
                        if (item[property] == null || (!item[property].toLowerCase().startsWith(start_object[property].toLowerCase()))) {
                            flag = false;
                            break;
                        }
                    }
                }
                if (flag) {
                    output.push(item);
                }
            }
            return output;
        }
    }
}

function APObjFilter() {
    return function (input, conditions) {
        var output = [];
        var flag;
        if (input != undefined) {
            for (item of input) {
                flag = true;
                for (property in conditions) {
                    if (conditions[property] != undefined && conditions[property] != []) {
                        for (obj of conditions[property]) {
                            if (item[property] == obj[property]) {
                                flag = true;
                                break;
                            } else {
                                flag = false;
                            }
                        }
                    }
                    if (!flag) {
                        break;
                    }
                }
                if (flag) {
                    output.push(item);
                }
            }
            return output;
        }
    }
}

angular
    .module('APfilter', [])
    .filter('APStartsWith', APStartsWith)
    .filter('APArrayFilter', APArrayFilter)