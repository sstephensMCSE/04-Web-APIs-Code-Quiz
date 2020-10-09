// Initialize quiz data as constant since it will be global unchanging
const quizData = [
{
    question: 'Why so JavaScript and Java have similar name?',
    a: 'JavaScript is a stripped-down version of Java',
    b: 'JavaScript syntax is loosely based on Java',
    c: 'They both originated on the island of Java',
    d: 'None of the above',
    answer: 'b'
},    {
    question: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
    a: 'The Users machine running a Web browser',
    b: ' The Web server',
    c: 'A central machine deep within Netscapes corporate offices',
    d: 'None of the above',
    answer: 'a'
},    {
    question: '______ JavaScript is also called client-side JavaScript.',
    a: 'Microsoft',
    b: 'Navigator',
    c: 'LiveWire',
    d: 'Native',
    answer: 'b'
},    {
    question: '__________ JavaScript is also called server-side JavaScript.',
    a: 'Microsoft',
    b: ' Navigator',
    c: 'LiveWire',
    d: 'Native',
     answer: 'c'
},    {
    question: 'What are variables used for in JavaScript Programs?',
    a: 'Storing numbers, dates, or other values',
    b: ' Varying randomly',
    c: 'Causing high-school algebra flashbacks',
    d: 'None of the above',
     answer: 'a'
},    {
    question: '_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.',
    a: 'Client-side',
    b: ' Server-side',
    c: 'Local',
    d: 'Native',
     answer: 'a',
},    {
    question: 'What should appear at the very end of your JavaScript?',    
    a: ' The </script>',
    b: '  The <script>',
    c: 'The END statement',
    d: 'None of the above',
    answer: 'a'
},    {
    question: 'Which of the following cant be done with client-side JavaScript?',
    a: 'Validating a form',
    b: ' Sending a forms contents by email',
    c: 'Storing the forms contents to a database file on the server',
    d: 'None of the above',
     answer: 'c'     
},    {
    question: 'Which of the following are capabilities of functions in JavaScript?',
    a: 'Return a value',
    b: ' Accept parameters and Return a value',
    c: 'Accept parameters',
    d: 'None of the above',
     answer: 'c'
},    {
    question: 'Which of the following is not a valid JavaScript variable name?',
    a: '2names',
    b: ' _first_and_last_names',
    c: 'FirstAndLast',
    d: 'None of the above',
     answer: 'a'
},    {
    question: '______ tag is an extension to HTML that can enclose any number of JavaScript statements',
    a: '<SCRIPT>',
    b: ' <BODY>',
    c: '<HEAD>',
    d: '<TITLE>',
     answer: 'a'
},    {
    question: 'How does JavaScript store dates in a date object?',
    a: 'The number of milliseconds since January 1st, 1970',
    b: ' The number of days since January 1st, 1900',
    c: 'The number of seconds since Netscapes public stock offering.',
    d: 'None of the above',
     answer: 'a'
},    {
    question: 'Which of the following attribute can hold the JavaScript version?',
    a: 'LANGUAGE',
    b: ' SCRIPT',
    c: 'VERSION',
    d: 'None of the above',
     answer: 'a'
},    {
    question: 'What is the correct JavaScript syntax to write "Hello World"?',
    a: 'System.out.println("Hello World")',
    b: ' println ("Hello World")',
    c: 'document.write("Hello World")',
    d: 'response.write("Hello World")',
     answer: 'c',
},    {
    question: 'Which of the following way can be used to indicate the LANGUAGE attribute?',
    a: '<LANGUAGE="JavaScriptVersion">',
    b: ' <SCRIPT LANGUAGE="JavaScriptVersion">',
    c: '<SCRIPT LANGUAGE="JavaScriptVersion">    JavaScript statements…</SCRIPT>',
    d: '<SCRIPT LANGUAGE="JavaScriptVersion"!>    JavaScript statements…</SCRIPT>',
     answer: 'c'
},    {
    question: 'Inside which HTML element do we put the JavaScript?',
    a: '<js>',
    b: ' <scripting>',
    c: '<script>',
    d: '<javascript>',
    answer: 'c'
},    {
    question: 'What is the correct syntax for referring to an external script called " abc.js"?',
    a: '<script href=" abc.js">',
    b: ' <script name=" abc.js">',
    c: '<script src=" abc.js">',
    d: 'None of the above',
     answer: 'c'
},    {
    question: 'Which types of image maps can be used with JavaScript?',
    a: 'Server-side image maps',
    b: 'Client-side image maps',
    c: 'Server-side image maps and Client-side image maps',
    d: 'None of the above',
     answer: 'b'
},    {
    question: 'Which of the following navigator object properties is the same in both   Netscape and IE?',
    a: 'navigator.appCodeName',
    b: ' navigator.appName',
    c: 'navigator.appVersion',
    d: 'None of the above',
     answer: 'a'
},    {
    question: 'Which is the correct way to write a JavaScript array?',
    a: 'var txt = new Array(1:"tim",2:"kim",3:"jim")',
    b: ' var txt = new Array:1=("tim")2=("kim")3=("jim")',
    c: 'var txt = new Array("tim","kim","jim")',
    d: 'var txt = new Array="tim","kim","jim"',
    answer: 'c',
},    {
    question: 'What does the <noscript> tag do?',
    a: 'Enclose text to be displayed by non-JavaScript browsers.',
    b: ' Prevents scripts on the page from executing.',
    c: 'Describes certain low-budget movies.',
    d: 'None of the above',
     answer: 'a'
},    {
    question: 'If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?',
    a: '"New Text"?',
    b: 'para1.value="New Text";',
    c: 'para1.firstChild.nodeValue= "New Text";',
    d: 'para1.nodeValue="New Text";',
    answer: 'b'
},    {
    question: 'JavaScript entities start with _______ and end with _________.',    
    a: 'Semicolon, colon',
    b: ' Semicolon, Ampersand',
    c: 'Ampersand, colon',
    d: 'Ampersand, semicolon',
     answer: 'd'
},    {
    question: 'Which of the following best describes JavaScript?',
    a: 'a low-level programming language.',
    b: ' a scripting language precompiled in the browser.',
    c: 'a compiled scripting language.',
    d: 'an object-oriented scripting language.',
     answer: 'd'
},    {
    question: 'Choose the server-side JavaScript object?',
    a: 'FileUpLoad',
    b: ' Function',
    c: 'File',
    d: 'Date',
    answer: 'c'
},    {
    question: 'Choose the client-side JavaScript object?',
    a: 'Database',
    b: ' Cursor',
    c: 'Client',
    d: 'FileUpLoad',
    answer: 'd'
},    {
    question: 'Which of the following is not considered a JavaScript operator?',
    a: 'new',
    b: 'this',
    c: 'delete',
    d: 'typeof',
     answer: 'b'
},    {
    question: '______method evaluates a string of JavaScript code in the context of the specified object.',
    a: 'Eval',
    b: ' ParseInt',
    c: 'ParseFloat',
    d: 'Efloat',
     answer: 'a'
},    {
    question: 'Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?',
    a: 'onfocus',
    b: 'onblur',
    c: 'onclick',
    d: 'ondblclick',
     answer: 'b'
},    {
    question: 'The syntax of Eval is ________________',
    a: '[objectName.]eval(numeriC.',
    b: '[objectName.]eval(string)',
    c: '[EvalName.]eval(string)',
    d: '[EvalName.]eval(numeriC.',
    answer: 'b'
},    {
    question: 'JavaScript is interpreted by _________',
    a: 'Client',
    b: ' Server',
    c: 'Object',
    d: 'None of the above',
    answer: 'a'
},    {
    question: 'Using _______ statement is how you test for a specific condition.',
    a: 'Select',
    b: 'If',
    c: 'Switch',
    d: 'For',
     answer: 'b'
},    {
    question: 'Which of the following is the structure of an if statement?',
    a: 'if (conditional expression is true) thenexecute this codeend if',
    b: ' if (conditional expression is true)execute this codeend if',
    c: 'if (conditional expression is true)   {then execute this code>->}',
    d: 'if (conditional expression is true) then {execute this code}',
    answer: 'c'
},    {
    question: 'How to create a Date object in JavaScript?',
    a: 'dateObjectName = new Date([parameters])',
    b: ' dateObjectName.new Date([parameters])',
    c: 'dateObjectName := new Date([parameters])',
    d: 'dateObjectName Date([parameters])',
     answer: 'a'
},    {
    question: 'The _______ method of an Array object adds and/or removes elements from an array.',
    a: 'Reverse',
    b: ' Shift',
    c: 'Slice',
    d: 'Splice',
     answer: 'd'
},    {
    question: 'To set up the window to capture all Click events, we use which of the following statement?',
    a: 'window.captureEvents(Event.CLICK);',
    b: 'window.handleEvents (Event.CLICK);',
    c: 'window.routeEvents(Event.CLICK );',
    d: 'window.raiseEvents(Event.CLICK );',
     answer: 'a'
},    {
    question: 'Which tag(s) can handle mouse events in Netscape?',
    a: '<IMG>',
    b: '<A>',
    c: '<BR>',
    d: 'None of the above',
     answer: 'b'
},    {
    question: '____________ is the tainted property of a window object.',
    a: 'Pathname',
    b: ' Protocol',
    c: 'Defaultstatus',
    d: 'Host',
     answer: 'C',
},    {
    question: 'To enable data tainting, the end user sets the _________ environment variable.',
    a: 'ENABLE_TAINT',
    b: ' MS_ENABLE_TAINT',
    c: 'NS_ENABLE_TAINT',
    d: 'ENABLE_TAINT_NS',
     answer: 'b'
},    {
    question: 'In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.',
    a: 'a wrapper',
    b: ' a link',
    c: 'a cursor',
    d: 'a form',
    answer: 'a'
},    {
    question: 'When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________',
    a: 'ScriptObject',
    b: 'JSObject',
    c: 'JavaObject',
    d: 'Jobject',
    answer: 'b'
},    {
    question: '_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.',
    a: 'ScriptObject',
    b: 'JSObject',
    c: 'JavaObject',
    d: 'Jobject',
     answer: 'b'
},    {
    question: '_________ is a wrapped Java array, accessed from within JavaScript code.',
    a: 'JavaArray',
    b: ' JavaClass',
    c: 'JavaObject',
    d: 'JavaPackage',
     answer: 'a'
},    {
    question: 'A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript .',
    a: 'JavaArray',
    b: 'JavaClass',
    c: 'JavaObject',
    d: 'JavaPackage',
     answer: 'b'
},    {
    question: 'The JavaScript exception is available to the Java code as an instance of __________',
    a: 'netscape.javascript.JSObject',
    b: 'netscape.javascript.JSException',
    c: 'netscape.plugin.JSException',
    d: 'None of the above',
    answer: 'b'
},    {
    question: 'To automatically open the console when a JavaScript error occurs which of the following is added to prefs.js?',
    a: 'user_pref(" javascript.console.open_on_error", false);',
    b: ' user_pref("javascript.console.open_error ", true);',
    c: 'user_pref("javascript.console.open_error ", false);',
    d: ' user_pref("javascript.console.open_on_error", true);',
    answer: 'd'
},    {
    question: 'To open a dialog box each time an error occurs, which of the following is added to prefs.js?',
    a: 'user_pref("javascript.classic.error_alerts", true);',
    b: ' user_pref("javascript.classic.error_alerts ", false);',
    c: 'user_pref("javascript.console.open_on_error ", true);',
    d: 'user_pref("javascript.console.open_on_error ", false);',
     answer: 'a'
},    {
    question: 'The syntax of a blur method in a button object is ______________',
    a: 'Blur()',
    b: ' Blur(contrast)',
    c: 'Blur(value)',
    d: 'Blur(depth)',
     answer: 'a'
},    {
    question: 'The syntax of capture events method for document object is ______________',
    a: 'captureEvents()',
    b: ' captureEvents(args eventType)',
    c: 'captureEvents(eventType)',
    d: 'captureEvents(eventVal)',
     answer: 'c'
},    {
    question: 'The syntax of close method for document object is ______________',
    a: 'Close(doC.',
    b: ' Close(object)',
    c: 'Close(val)',
    d: 'Close()',
    answer: 'd'
},    {    
    question: 'Is it possible to nest functions in JavaScript?',
    a: 'True',
    b: ' False',
    answer: 'a'
},    {    
    question: 'Scripting language are',
    a: 'High Level Programming language',
    b: ' Assembly Level programming language',
    c: ' Machine level programming language',
    answer: 'a'
},    {
    question: 'Which best explains getSelection()?',
    a: 'Returns the VALUE of a selected OPTION.',
    b: ' Returns document.URL of the window in focus.',
    c: ' Returns the value of cursor-selected text',
    d: ' Returns the VALUE of a checked radio input.',
    answer: 'c'
},    {
    question: 'Choose the client-side JavaScript object:',
    a: 'Database',
    b: ' Cursor',
    c: ' Client',
    d: ' FileUpLoad',
    answer: 'd'
},    {
    question: 'What is mean by "this" keyword in javascript?',
    a: 'It refers current object',
    b: ' It referes previous object',
    c: ' It is variable which contains value',
    d: ' None of the above',
    answer: 'a'
},    {
    question: 'In JavaScript, Window.prompt() method return true or false value ?',
    a: 'False',
    b: ' True',
    answer: 'a'
    }
];