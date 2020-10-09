// Initialize quiz data as constant since it will be global unchanging
const quizData = [
{
    question: 'In JavaScript, Window.prompt() method return true or false value ?',
    choices :{      
        a: 'False',
        b: ' True'
    },    
    answer: 'a'
},    {    
    question: 'Why so JavaScript and Java have similar name?',
    choices :{      
        a: 'JavaScript is a stripped-down version of Java',
        b: 'JavaScript syntax is loosely based on Java',
        c: 'They both originated on the island of Java',
        d: 'None of the above'
    },
    answer: 'b'
},    {
    question: 'Scripting language are',
    choices :{      
        a: 'High Level Programming language',
        b: ' Assembly Level programming language',
        c: ' Machine level programming language'
    },
    answer: 'a'
},    {
    question: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
    choices :{      
        a: 'The Users machine running a Web browser',
        b: ' The Web server',
        c: 'A central machine deep within Netscapes corporate offices',
    },
    answer: 'a'
},    {
    question: '______ JavaScript is also called client-side JavaScript.',
    choices :{
        a: 'Microsoft',
        b: 'Navigator',
        c: 'LiveWire',
        d: 'Native'
    },
    answer: 'b'
},    {
    question: '__________ JavaScript is also called server-side JavaScript.',
    choices :{
        a: 'Microsoft',
        b: ' Navigator',
        c: 'LiveWire',        
    },
     answer: 'c'
},    {
    question: 'What are variables used for in JavaScript Programs?',
    choices :{
        a: 'Storing numbers, dates, or other values',
        b: ' Varying randomly',
        c: 'Causing high-school algebra flashbacks',
        d: 'None of the above'
    },
     answer: 'a'
},    {
    question: '_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.',
    choices :{
        a: 'Client-side',
        b: ' Server-side',
        c: 'Local',
        d: 'Native'
    },
     answer: 'a',
},    {
    question: 'What should appear at the very end of your JavaScript?',    
    choices :{
        a: ' The </script>',
        b: '  The <script>',
        c: 'The END statement',
        d: 'None of the above'
    },
    answer: 'a'
},    {
    question: 'Which of the following cant be done with client-side JavaScript?',
    choices :{
        a: 'Validating a form',
        b: ' Sending a forms contents by email',
        c: 'Storing the forms contents to a database file on the server'
    },
     answer: 'c'     
},    {
    question: 'Which of the following are capabilities of functions in JavaScript?',
    choices :{
        a: 'Return a value',
        b: ' Accept parameters and Return a value',
        c: 'Accept parameters'
    },
     answer: 'c'
},    {
    question: 'Which of the following is not a valid JavaScript variable name?',
    choices :{
        a: '2names',
        b: ' _first_and_last_names',
        c: 'FirstAndLast',
        d: 'None of the above'
    },
     answer: 'a'
},    {
    question: '______ tag is an extension to HTML that can enclose any number of JavaScript statements',
    choices :{
        a: '<SCRIPT>',
        b: ' <BODY>',
        c: '<HEAD>'
    },
     answer: 'a'
},    {
    question: 'How does JavaScript store dates in a date object?',
    choices :{
        a: 'The number of milliseconds since January 1st, 1970',
        b: ' The number of days since January 1st, 1900',
        c: 'The number of seconds since Netscapes public stock offering.',
        d: 'None of the above'
    },
     answer: 'a'
},    {
    question: 'Which of the following attribute can hold the JavaScript version?',
    choices :{
        a: 'LANGUAGE',
        b: ' SCRIPT',
        c: 'VERSION',
        d: 'None of the above'
    },
     answer: 'a'
},    {
    question: 'What is the correct JavaScript syntax to write "Hello World"?',
    choices :{
        a: 'System.out.println("Hello World")',
        b: ' println ("Hello World")',
        c: 'document.write("Hello World")',
        d: 'response.write("Hello World")'
    },
     answer: 'c',
},    {
    question: 'Which of the following way can be used to indicate the LANGUAGE attribute?',
    choices :{
        a: '<LANGUAGE="JavaScriptVersion">',
        b: ' <SCRIPT LANGUAGE="JavaScriptVersion">',
        c: '<SCRIPT LANGUAGE="JavaScriptVersion">    JavaScript statements…</SCRIPT>',
        d: '<SCRIPT LANGUAGE="JavaScriptVersion"!>    JavaScript statements…</SCRIPT>'
    },
     answer: 'c'
},    {
    question: 'Inside which HTML element do we put the JavaScript?',
    choices :{
        a: '<js>',
        b: ' <scripting>',
        c: '<script>',
        d: '<javascript>'
    },
    answer: 'c'
},    {
    question: 'What is the correct syntax for referring to an external script called " abc.js"?',
    choices :{
        a: '<script href=" abc.js">',
        b: ' <script name=" abc.js">',
        c: '<script src=" abc.js">'
    },
     answer: 'c'
},    {
    question: 'Which types of image maps can be used with JavaScript?',
    choices :{
        a: 'Server-side image maps',
        b: 'Client-side image maps',
        c: 'Server-side image maps and Client-side image maps'
    },
     answer: 'b'
},    {
    question: 'Which of the following navigator object properties is the same in both   Netscape and IE?',
    choices :{
        a: 'navigator.appCodeName',
        b: ' navigator.appName'
    },
     answer: 'a'
},    {
    question: 'Which is the correct way to write a JavaScript array?',
    choices :{
        a: 'var txt = new Array(1:"tim",2:"kim",3:"jim")',
        b: ' var txt = new Array:1=("tim")2=("kim")3=("jim")',
        c: 'var txt = new Array("tim","kim","jim")',
        d: 'var txt = new Array="tim","kim","jim"'
    },
    answer: 'c'
},    {
    question: 'What does the <noscript> tag do?',
    choices :{
        a: 'Enclose text to be displayed by non-JavaScript browsers.',
        b: ' Prevents scripts on the page from executing.'
    },
     answer: 'a'
},    {
    question: 'If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?',
    choices :{
        a: '"New Text"?',
        b: 'para1.value="New Text";',
        c: 'para1.firstChild.nodeValue= "New Text";',
        d: 'para1.nodeValue="New Text";'
    },
    answer: 'b'
},    {
    question: 'JavaScript entities start with _______ and end with _________.',    
    choices :{
        a: 'Semicolon, colon',
        b: ' Semicolon, Ampersand',
        c: 'Ampersand, colon',
        d: 'Ampersand, semicolon'
    },
     answer: 'd'
},    {
    question: 'Which of the following best describes JavaScript?',
    choices :{
        a: 'a low-level programming language.',
        b: ' a scripting language precompiled in the browser.',
        c: 'a compiled scripting language.',
        d: 'an object-oriented scripting language.'
    },
     answer: 'd'
},    {
    question: 'Choose the server-side JavaScript object?',
    choices :{
        a: 'FileUpLoad',
        b: ' Function',
        c: 'File',
        d: 'Date'
    },
    answer: 'c'
},    {
    question: 'Choose the client-side JavaScript object?',
    choices :{
        a: 'Database',
        b: ' Cursor',
        c: 'Client',
        d: 'FileUpLoad'
    },
    answer: 'd'
},    {
    question: 'Which of the following is not considered a JavaScript operator?',
    choices :{
        a: 'new',
        b: 'this',
        c: 'delete',
        d: 'typeof'
    },
     answer: 'b'
},    {
    question: '______method evaluates a string of JavaScript code in the context of the specified object.',
    choices :{
        a: 'Eval',
        b: ' ParseInt',
        c: 'ParseFloat',
        d: 'Efloat'
    },
     answer: 'a'
},    {
    question: 'Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?',
    choices :{
        a: 'onfocus',
        b: 'onblur',
        c: 'onclick',
        d: 'ondblclick'
    },        
    answer: 'b'
},    {
    question: 'The syntax of Eval is ________________',
    choices :{
        a: '[objectName.]eval(numeriC.',
        b: '[objectName.]eval(string)',
        c: '[EvalName.]eval(string)'
    },
    answer: 'b'
},    {
    question: 'JavaScript is interpreted by _________',
    choices :{
        a: 'Client',
        b: ' Server',
        c: 'Object',
        d: 'None of the above'
    },
    answer: 'a'
},    {
    question: 'Using _______ statement is how you test for a specific condition.',
    choices :{
        a: 'Select',
        b: 'If',
        c: 'Switch',
        d: 'For'
    },
     answer: 'b'
},    {
    question: 'Which of the following is the structure of an if statement?',
    choices :{
        a: 'if (conditional expression is true) thenexecute this codeend if',
        b: ' if (conditional expression is true)execute this codeend if',
        c: 'if (conditional expression is true)   {then execute this code>->}',
        d: 'if (conditional expression is true) then {execute this code}'
    },
    answer: 'c'
},    {
    question: 'How to create a Date object in JavaScript?',
    choices :{
        a: 'dateObjectName = new Date([parameters])',
        b: ' dateObjectName.new Date([parameters])',
        c: 'dateObjectName := new Date([parameters])'
    },
     answer: 'a'
},    {
    question: 'The _______ method of an Array object adds and/or removes elements from an array.',
    choices :{
        a: 'Reverse',
        b: ' Shift',
        c: 'Slice',
        d: 'Splice'
    },
     answer: 'd'
},    {
    question: 'To set up the window to capture all Click events, we use which of the following statement?',
    choices :{
        a: 'window.captureEvents(Event.CLICK);',
        b: 'window.handleEvents (Event.CLICK);',
        c: 'window.routeEvents(Event.CLICK );'
    },
     answer: 'a'
},    {
    question: 'Which tag(s) can handle mouse events in Netscape?',
    choices :{
        a: '<IMG>',
        b: '<A>',
        c: '<BR>'
    },
     answer: 'b'
},    {
    question: '____________ is the tainted property of a window object.',
    choices :{
        a: 'Pathname',
        b: ' Protocol',
        c: 'Defaultstatus'
    },
     answer: 'c',
},    {
    question: 'To enable data tainting, the end user sets the _________ environment variable.',
    choices :{
        a: 'ENABLE_TAINT',
        b: ' MS_ENABLE_TAINT',
        c: 'NS_ENABLE_TAINT',
        d: 'ENABLE_TAINT_NS'
    },
     answer: 'b'
},    {
    question: 'In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.',
    choices :{
        a: 'a wrapper',
        b: ' a link',
        c: 'a cursor',
        d: 'a form'
    },
    answer: 'a'
},    {
    question: 'When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________',
    choices :{
        a: 'ScriptObject',
        b: 'JSObject',
        c: 'JavaObject',
        d: 'Jobject'
    },
    answer: 'b'
},    {
    question: '_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.',
    choices :{
        a: 'ScriptObject',
        b: 'JSObject',
        c: 'JavaObject'
    },
     answer: 'b'
}
];