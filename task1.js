var component =[
    {
        "key": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
        "enabled": true,
        "qualifier": "FIL",
        "name": "initializer.js",
        "longName": "src/functions/initializer.js",
        "path": "src/functions/initializer.js"
    },
    {
        "key": "SKU-MAPPING-DIDOS",
        "enabled": true,
        "qualifier": "TRK",
        "name": "SKU-MAPPING-DIDOS",
        "longName": "SKU-MAPPING-DIDOS"
    },
    {
        "key": "SKU-MAPPING-DIDOS:src/functions/transform.js",
        "enabled": true,
        "qualifier": "FIL",
        "name": "transform.js",
        "longName": "src/functions/transform.js",
        "path": "src/functions/transform.js"
    },
    {
        "key": "SKU-MAPPING-DIDOS:src/s3SelectObjects.js",
        "enabled": true,
        "qualifier": "FIL",
        "name": "s3SelectObjects.js",
        "longName": "src/s3SelectObjects.js",
        "path": "src/s3SelectObjects.js"
    }
]

var issues =[
    {
        "key": "AYse7zO9n-UGe7KQC1zR",
        "rule": "javascript:S6323",
        "severity": "MAJOR",
        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 61,
        "hash": "6522d158443fcefda79fcbf5041ec21c",
        "textRange": {
            "startLine": 61,
            "endLine": 61,
            "startOffset": 94,
            "endOffset": 95
        },
        "flows": [],
        "status": "OPEN",
        "message": "Remove this empty alternative.",
        "effort": "5min",
        "debt": "5min",
        "author": "himanshu.pant@wickes.co.uk",
        "tags": [
            "regex"
        ],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2022-11-10T06:18:24+0000",
        "updateDate": "2023-10-18T11:52:33+0000",
        "type": "VULNERABILITY",
        "scope": "MAIN",
        "quickFixAvailable": false,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYse7zO8n-UGe7KQC1zP",
        "rule": "javascript:S6594",
        "severity": "MINOR",
        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 61,
        "hash": "6522d158443fcefda79fcbf5041ec21c",
        "textRange": {
            "startLine": 61,
            "endLine": 61,
            "startOffset": 42,
            "endOffset": 47
        },
        "flows": [],
        "status": "OPEN",
        "message": "Use the \"RegExp.exec()\" method instead.",
        "effort": "5min",
        "debt": "5min",
        "author": "himanshu.pant@wickes.co.uk",
        "tags": [
            "regex"
        ],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2022-11-10T06:18:24+0000",
        "updateDate": "2023-10-11T13:30:47+0000",
        "type": "CODE_SMELL",
        "scope": "MAIN",
        "quickFixAvailable": true,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYse7zO9n-UGe7KQC1zS",
        "rule": "javascript:S3776",
        "severity": "CRITICAL",
        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 91,
        "hash": "1ee5ef1f836f4812e60967210fd874af",
        "textRange": {
            "startLine": 91,
            "endLine": 91,
            "startOffset": 58,
            "endOffset": 60
        },
        "flows": [
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 99,
                            "endLine": 99,
                            "startOffset": 2,
                            "endOffset": 5
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 100,
                            "endLine": 100,
                            "startOffset": 72,
                            "endOffset": 74
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 102,
                            "endLine": 102,
                            "startOffset": 41,
                            "endOffset": 43
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 103,
                            "endLine": 103,
                            "startOffset": 4,
                            "endOffset": 6
                        },
                        "msg": "+2 (incl. 1 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 118,
                            "endLine": 118,
                            "startOffset": 6,
                            "endOffset": 10
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 104,
                            "endLine": 104,
                            "startOffset": 50,
                            "endOffset": 52
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 106,
                            "endLine": 106,
                            "startOffset": 45,
                            "endOffset": 47
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 107,
                            "endLine": 107,
                            "startOffset": 50,
                            "endOffset": 52
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 108,
                            "endLine": 108,
                            "startOffset": 6,
                            "endOffset": 8
                        },
                        "msg": "+3 (incl. 2 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 111,
                            "endLine": 111,
                            "startOffset": 13,
                            "endOffset": 15
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 114,
                            "endLine": 114,
                            "startOffset": 8,
                            "endOffset": 12
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 122,
                            "endLine": 122,
                            "startOffset": 2,
                            "endOffset": 5
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 123,
                            "endLine": 123,
                            "startOffset": 37,
                            "endOffset": 39
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 124,
                            "endLine": 124,
                            "startOffset": 4,
                            "endOffset": 6
                        },
                        "msg": "+2 (incl. 1 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 101,
                            "endLine": 101,
                            "startOffset": 66,
                            "endOffset": 68
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            }
        ],
        "status": "OPEN",
        "message": "Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed.",
        "effort": "9min",
        "debt": "9min",
        "author": "siddharthshah2601@gmail.com",
        "tags": [
            "brain-overload"
        ],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2023-04-14T09:05:01+0000",
        "updateDate": "2023-10-11T13:30:47+0000",
        "type": "CODE_SMELL",
        "scope": "MAIN",
        "quickFixAvailable": false,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYse7zO9n-UGe7KQC1zT",
        "rule": "javascript:S6582",
        "severity": "MAJOR",
        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 101,
        "hash": "4bdf36e122395783c6b906e38e61b1ff",
        "textRange": {
            "startLine": 101,
            "endLine": 101,
            "startOffset": 62,
            "endOffset": 95
        },
        "flows": [],
        "status": "OPEN",
        "message": "Prefer using an optional chain expression instead, as it's more concise and easier to read.",
        "effort": "5min",
        "debt": "5min",
        "author": "siddharthshah2601@gmail.com",
        "tags": [],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2023-04-14T09:05:01+0000",
        "updateDate": "2023-10-11T13:30:47+0000",
        "type": "CODE_SMELL",
        "scope": "MAIN",
        "quickFixAvailable": false,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYse7zO9n-UGe7KQC1zU",
        "rule": "javascript:S1871",
        "severity": "MAJOR",
        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 114,
        "hash": "9d9745793ea808834d7de26d55c88e2e",
        "textRange": {
            "startLine": 114,
            "endLine": 117,
            "startOffset": 13,
            "endOffset": 7
        },
        "flows": [
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
                        "textRange": {
                            "startLine": 108,
                            "endLine": 111,
                            "startOffset": 30,
                            "endOffset": 7
                        },
                        "msg": "Original",
                        "msgFormattings": []
                    }
                ]
            }
        ],
        "status": "OPEN",
        "message": "This branch's code block is the same as the block for the branch on line 108.",
        "effort": "10min",
        "debt": "10min",
        "author": "siddharthshah2601@gmail.com",
        "tags": [
            "design",
            "suspicious"
        ],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2023-04-14T09:05:01+0000",
        "updateDate": "2023-10-11T13:30:47+0000",
        "type": "CODE_SMELL",
        "scope": "MAIN",
        "quickFixAvailable": false,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYse7zO9n-UGe7KQC1zV",
        "rule": "javascript:S1874",
        "severity": "MINOR",
        "component": "SKU-MAPPING-DIDOS:src/functions/initializer.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 175,
        "hash": "5d9da7f1911a56ff5810761bc01bcb11",
        "textRange": {
            "startLine": 175,
            "endLine": 175,
            "startOffset": 15,
            "endOffset": 33
        },
        "flows": [],
        "status": "OPEN",
        "message": "'findFilesToProcess' is deprecated.",
        "effort": "15min",
        "debt": "15min",
        "author": "himanshu.pant@wickes.co.uk",
        "tags": [
            "cwe",
            "obsolete"
        ],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2022-12-08T09:13:35+0000",
        "updateDate": "2023-10-11T13:30:47+0000",
        "type": "CODE_SMELL",
        "scope": "MAIN",
        "quickFixAvailable": false,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYse7zNOn-UGe7KQC1zI",
        "rule": "javascript:S3776",
        "severity": "CRITICAL",
        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 16,
        "hash": "9478450deaaefa71635689bb39a6a5ad",
        "textRange": {
            "startLine": 16,
            "endLine": 16,
            "startOffset": 41,
            "endOffset": 43
        },
        "flows": [
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 35,
                            "endLine": 35,
                            "startOffset": 4,
                            "endOffset": 7
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 94,
                            "endLine": 94,
                            "startOffset": 4,
                            "endOffset": 6
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 118,
                            "endLine": 118,
                            "startOffset": 4,
                            "endOffset": 6
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 126,
                            "endLine": 126,
                            "startOffset": 4,
                            "endOffset": 7
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 127,
                            "endLine": 127,
                            "startOffset": 6,
                            "endOffset": 8
                        },
                        "msg": "+2 (incl. 1 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 137,
                            "endLine": 137,
                            "startOffset": 8,
                            "endOffset": 12
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 127,
                            "endLine": 127,
                            "startOffset": 22,
                            "endOffset": 24
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 129,
                            "endLine": 129,
                            "startOffset": 8,
                            "endOffset": 11
                        },
                        "msg": "+3 (incl. 2 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 165,
                            "endLine": 165,
                            "startOffset": 4,
                            "endOffset": 9
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 39,
                            "endLine": 39,
                            "startOffset": 10,
                            "endOffset": 12
                        },
                        "msg": "+3 (incl. 2 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 49,
                            "endLine": 49,
                            "startOffset": 12,
                            "endOffset": 14
                        },
                        "msg": "+4 (incl. 3 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 52,
                            "endLine": 52,
                            "startOffset": 16,
                            "endOffset": 18
                        },
                        "msg": "+5 (incl. 4 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 55,
                            "endLine": 55,
                            "startOffset": 16,
                            "endOffset": 21
                        },
                        "msg": "+5 (incl. 4 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 61,
                            "endLine": 61,
                            "startOffset": 18,
                            "endOffset": 23
                        },
                        "msg": "+6 (incl. 5 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 74,
                            "endLine": 74,
                            "startOffset": 10,
                            "endOffset": 12
                        },
                        "msg": "+3 (incl. 2 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 110,
                            "endLine": 110,
                            "startOffset": 8,
                            "endOffset": 10
                        },
                        "msg": "+2 (incl. 1 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 111,
                            "endLine": 111,
                            "startOffset": 30,
                            "endOffset": 32
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            }
        ],
        "status": "OPEN",
        "message": "Refactor this function to reduce its Cognitive Complexity from 41 to the 15 allowed.",
        "effort": "31min",
        "debt": "31min",
        "author": "snehal.pund@cognizant.com",
        "tags": [
            "brain-overload"
        ],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2023-08-21T13:30:57+0000",
        "updateDate": "2023-10-12T06:39:44+0000",
        "type": "CODE_SMELL",
        "scope": "MAIN",
        "quickFixAvailable": false,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYsinTAYn-UGe7KQC16l",
        "rule": "javascript:S1126",
        "severity": "MINOR",
        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 110,
        "hash": "9e4cfecead37bff43e5fe5b201c04cdd",
        "textRange": {
            "startLine": 110,
            "endLine": 115,
            "startOffset": 8,
            "endOffset": 9
        },
        "flows": [],
        "status": "OPEN",
        "message": "Replace this if-then-else flow by a single return statement.",
        "effort": "2min",
        "debt": "2min",
        "author": "snehal.pund@cognizant.com",
        "tags": [
            "clumsy"
        ],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2023-10-12T06:39:44+0000",
        "updateDate": "2023-10-12T06:39:44+0000",
        "type": "CODE_SMELL",
        "scope": "MAIN",
        "quickFixAvailable": true,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYse7zNOn-UGe7KQC1zJ",
        "rule": "javascript:S3403",
        "severity": "MAJOR",
        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 111,
        "hash": "0ae380b3aa994c2441ba8db08d957cba",
        "textRange": {
            "startLine": 111,
            "endLine": 111,
            "startOffset": 16,
            "endOffset": 19
        },
        "flows": [
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 111,
                            "endLine": 111,
                            "startOffset": 10,
                            "endOffset": 15
                        },
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 111,
                            "endLine": 111,
                            "startOffset": 20,
                            "endOffset": 29
                        },
                        "msgFormattings": []
                    }
                ]
            }
        ],
        "status": "OPEN",
        "message": "Remove this \"===\" check; it will always be false. Did you mean to use \"==\"?",
        "effort": "5min",
        "debt": "5min",
        "author": "himanshu.pant@wickes.co.uk",
        "tags": [],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2022-11-10T08:58:38+0000",
        "updateDate": "2023-10-11T13:30:47+0000",
        "type": "BUG",
        "scope": "MAIN",
        "quickFixAvailable": true,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYsinTAYn-UGe7KQC16m",
        "rule": "javascript:S3403",
        "severity": "MAJOR",
        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 112,
        "hash": "5b8bc4c98a0c4d437cae4088ddb26539",
        "textRange": {
            "startLine": 112,
            "endLine": 112,
            "startOffset": 25,
            "endOffset": 28
        },
        "flows": [
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 112,
                            "endLine": 112,
                            "startOffset": 10,
                            "endOffset": 24
                        },
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
                        "textRange": {
                            "startLine": 112,
                            "endLine": 112,
                            "startOffset": 29,
                            "endOffset": 38
                        },
                        "msgFormattings": []
                    }
                ]
            }
        ],
        "status": "OPEN",
        "message": "Remove this \"===\" check; it will always be false. Did you mean to use \"==\"?",
        "effort": "5min",
        "debt": "5min",
        "author": "snehal.pund@cognizant.com",
        "tags": [],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2023-10-12T06:39:44+0000",
        "updateDate": "2023-10-12T06:39:44+0000",
        "type": "BUG",
        "scope": "MAIN",
        "quickFixAvailable": true,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYsinTAYn-UGe7KQC16n",
        "rule": "javascript:S6582",
        "severity": "MAJOR",
        "component": "SKU-MAPPING-DIDOS:src/functions/transform.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 127,
        "hash": "15f728463018ba12cdfc9ff8da04ea49",
        "textRange": {
            "startLine": 127,
            "endLine": 128,
            "startOffset": 10,
            "endOffset": 53
        },
        "flows": [],
        "status": "OPEN",
        "message": "Prefer using an optional chain expression instead, as it's more concise and easier to read.",
        "effort": "5min",
        "debt": "5min",
        "author": "snehal.pund@cognizant.com",
        "tags": [],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2023-10-12T06:39:44+0000",
        "updateDate": "2023-10-12T06:39:44+0000",
        "type": "CODE_SMELL",
        "scope": "MAIN",
        "quickFixAvailable": false,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYse7zPrn-UGe7KQC1zW",
        "rule": "javascript:S3776",
        "severity": "CRITICAL",
        "component": "SKU-MAPPING-DIDOS:src/s3SelectObjects.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 102,
        "hash": "87163cff26773ca7ce43fdbea2637fd6",
        "textRange": {
            "startLine": 102,
            "endLine": 102,
            "startOffset": 22,
            "endOffset": 24
        },
        "flows": [
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/s3SelectObjects.js",
                        "textRange": {
                            "startLine": 108,
                            "endLine": 108,
                            "startOffset": 28,
                            "endOffset": 29
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/s3SelectObjects.js",
                        "textRange": {
                            "startLine": 124,
                            "endLine": 124,
                            "startOffset": 10,
                            "endOffset": 12
                        },
                        "msg": "+2 (incl. 1 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/s3SelectObjects.js",
                        "textRange": {
                            "startLine": 127,
                            "endLine": 127,
                            "startOffset": 12,
                            "endOffset": 16
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/s3SelectObjects.js",
                        "textRange": {
                            "startLine": 129,
                            "endLine": 129,
                            "startOffset": 12,
                            "endOffset": 14
                        },
                        "msg": "+3 (incl. 2 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/s3SelectObjects.js",
                        "textRange": {
                            "startLine": 129,
                            "endLine": 129,
                            "startOffset": 24,
                            "endOffset": 26
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/s3SelectObjects.js",
                        "textRange": {
                            "startLine": 135,
                            "endLine": 135,
                            "startOffset": 16,
                            "endOffset": 18
                        },
                        "msg": "+5 (incl. 4 for nesting)",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/s3SelectObjects.js",
                        "textRange": {
                            "startLine": 135,
                            "endLine": 135,
                            "startOffset": 34,
                            "endOffset": 36
                        },
                        "msg": "+1",
                        "msgFormattings": []
                    }
                ]
            },
            {
                "locations": [
                    {
                        "component": "SKU-MAPPING-DIDOS:src/s3SelectObjects.js",
                        "textRange": {
                            "startLine": 154,
                            "endLine": 154,
                            "startOffset": 18,
                            "endOffset": 23
                        },
                        "msg": "+5 (incl. 4 for nesting)",
                        "msgFormattings": []
                    }
                ]
            }
        ],
        "status": "OPEN",
        "message": "Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed.",
        "effort": "9min",
        "debt": "9min",
        "author": "himanshu.pant@wickes.co.uk",
        "tags": [
            "brain-overload"
        ],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2022-10-06T04:55:08+0000",
        "updateDate": "2023-10-11T13:30:47+0000",
        "type": "CODE_SMELL",
        "scope": "MAIN",
        "quickFixAvailable": false,
        "messageFormattings": [],
        "codeVariants": []
    },
    {
        "key": "AYse7zPrn-UGe7KQC1zX",
        "rule": "javascript:S6582",
        "severity": "MAJOR",
        "component": "SKU-MAPPING-DIDOS:src/s3SelectObjects.js",
        "project": "SKU-MAPPING-DIDOS",
        "line": 135,
        "hash": "a2d125b2fadb887f4a12b5ad5e08580f",
        "textRange": {
            "startLine": 135,
            "endLine": 135,
            "startOffset": 20,
            "endOffset": 58
        },
        "flows": [],
        "status": "OPEN",
        "message": "Prefer using an optional chain expression instead, as it's more concise and easier to read.",
        "effort": "5min",
        "debt": "5min",
        "author": "himanshu.pant@wickes.co.uk",
        "tags": [],
        "transitions": [
            "confirm",
            "resolve",
            "falsepositive",
            "wontfix"
        ],
        "actions": [
            "set_type",
            "set_tags",
            "comment",
            "set_severity",
            "assign"
        ],
        "comments": [],
        "creationDate": "2022-10-04T09:30:37+0000",
        "updateDate": "2023-10-11T13:30:47+0000",
        "type": "CODE_SMELL",
        "scope": "MAIN",
        "quickFixAvailable": false,
        "messageFormattings": [],
        "codeVariants": []
    }
]




