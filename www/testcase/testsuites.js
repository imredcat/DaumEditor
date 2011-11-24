(function() {
    var testCases = [
        "testcase/Assistant.js",
        "testcase/txlib_test.js",
        "testcase/moreless_test.js",
        "testcase/richtextbox_test.js",
        "testcase/fontTool_test.js",
        "testcase/fontExecCommand_test.js",
//        "testcase/bold_test.js",
//        "testcase/underline_test.js",
        "testcase/fontsize_test.js",
        "testcase/fontfamily_test.js",
        "testcase/forecolor_test.js",
        "testcase/backcolor_test.js",
        "testcase/domutil_test.js",
        "testcase/indent_test.js",
        "testcase/outdent_test.js",
        "testcase/backspace_test.js",
        "testcase/styledlist_test.js",
        "testcase/align_test.js",
        "testcase/infinite_loop_test.js",
        "testcase/history_test.js",
        "testcase/wysiwyg_panel_test.js",
        "testcase/processor_test.js",
        "testcase/processor_webkit_test.js",
        "testcase/webfontloader_test.js",
        "testcase/autosaver_test.js",
        "testcase/fixing_test.js",
        "testcase/htmlparser_test.js",
        "testcase/FontCssProperty_test.js",
        "testcase/paste_test.js"
    ];

    EditorJSLoader.ready(function() {
        for (var i = 0; i < testCases.length; i++) {
            Trex.I.JSRequester.importScript(testCases[i]);
        }
    });
})();