$(document).ready(function () {


        var split_image = '<p><img class="split_image" title="Split here..." alt="" src="../static/img/trans.gif"></p>';

        $("#split-case").click(function () {
            var padeditor = require('ep_etherpad-lite/static/js/pad_editor').padeditor;

            return padeditor.ace.callWithAce(function (ace) {
                rep = ace.ace_getRep();
                ace.ace_replaceRange(rep.selStart, rep.selEnd, "E");
                ace.ace_performSelectionChange([rep.selStart[0],rep.selStart[1]-1], rep.selStart, false);
                ace.ace_performDocumentApplyAttributesToRange(rep.selStart, rep.selEnd, [["embedMedia", split_image]]);
            }, "embedMedia");
        });

});
