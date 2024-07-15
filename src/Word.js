let Programming_Language = {
  java: "A widely-used object-oriented programming language known for its portability across platforms.",
  C: "A powerful systems programming language that provides low-level access to memory.",
  ruby: "An interpreted, high-level, general-purpose programming language known for its simplicity and productivity.",
  perl: "A high-level, general-purpose programming language known for its text processing capabilities.",
  python:
    "A high-level programming language known for its readability and extensive standard library.",
  r: "A language and environment specifically designed for statistical computing and graphics.",
  javaScript:
    "A high-level, dynamic programming language primarily used for enhancing web pages.",
  css: "A stylesheet language used to describe the presentation of a document written in HTML or XML.",
  html: "The standard markup language used for creating web pages.",
  php: "A popular general-purpose scripting language especially suited to web development.",
  sql: "A domain-specific language used for managing and manipulating relational databases.",
  mysql: "An open-source relational database management system.",
  cobol:
    "A legacy programming language primarily used in business, finance, and administrative systems for companies and governments.",
  scala:
    "A programming language that combines object-oriented and functional programming paradigms.",
  abap: "A programming language developed by SAP for developing applications on the SAP R/3 system.",
  xml: "A markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable.",
  kotlin:
    "A statically typed programming language for modern multiplatform applications.",
  matlab:
    "A high-performance language for technical computing, integrating computation, visualization, and programming.",
  pascal:
    "A procedural programming language designed for teaching programming as a systematic discipline.",
  typescript:
    "A strict syntactical superset of JavaScript that adds optional static typing.",
};

function Word() {
  const key =
    Object.keys(Programming_Language)[
      (Math.random() * Object.keys(Programming_Language).length) | 0
    ];
  console.log(key);
  console.log(Programming_Language[key]);
  return key;
}

export { Word, Programming_Language };

// Java: A widely-used object-oriented programming language known for its portability across platforms.
// C: A powerful systems programming language that provides low-level access to memory.
// Ruby: An interpreted, high-level, general-purpose programming language known for its simplicity and productivity.
// Perl: A high-level, general-purpose programming language known for its text processing capabilities.
// Python: A high-level programming language known for its readability and extensive standard library.
// R: A language and environment specifically designed for statistical computing and graphics.
// JavaScript: A high-level, dynamic programming language primarily used for enhancing web pages.
// CSS: A stylesheet language used to describe the presentation of a document written in HTML or XML.
// HTML: The standard markup language used for creating web pages.
// PHP: A popular general-purpose scripting language especially suited to web development.
// SQL: A domain-specific language used for managing and manipulating relational databases.
// MySQL: An open-source relational database management system.
// COBOL: A legacy programming language primarily used in business, finance, and administrative systems for companies and governments.
// Scala: A programming language that combines object-oriented and functional programming paradigms.
// ABAP: A programming language developed by SAP for developing applications on the SAP R/3 system.
// XML: A markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable.
// Kotlin: A statically typed programming language for modern multiplatform applications.
// MATLAB: A high-performance language for technical computing, integrating computation, visualization, and programming.
// Pascal: A procedural programming language designed for teaching programming as a systematic discipline.
// TypeScript: A strict syntactical superset of JavaScript that adds optional static typing.
