Provided types map file "/a/lib/typesMap.json" doesn't exist
request:{"seq":0,"type":"request","command":"open","arguments":{"file":"/a/b/app.ts"}}
Search path: /a/b
For info: /a/b/app.ts :: Config file name: /a/b/tsconfig.json
Creating configuration project /a/b/tsconfig.json
FileWatcher:: Added:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/a/b/tsconfig.json","reason":"Creating possible configured project for /a/b/app.ts to open"}}
Config: /a/b/tsconfig.json : {
 "rootNames": [
  "/a/b/app.ts"
 ],
 "options": {
  "configFilePath": "/a/b/tsconfig.json"
 }
}
DirectoryWatcher:: Added:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Plugins were requested but not running in environment that supports 'require'. Nothing will be loaded
Starting updateGraphWorker: Project: /a/b/tsconfig.json
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/tsconfig.json WatchType: Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/tsconfig.json WatchType: Type roots
Finishing updateGraphWorker: Project: /a/b/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Project '/a/b/tsconfig.json' (Configured)
	Files (2)
	/a/lib/lib.d.ts
	/a/b/app.ts


	../lib/lib.d.ts
	  Default library for target 'es3'
	app.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

-----------------------------------------------
event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/a/b/tsconfig.json"}}
event:
    {"seq":0,"type":"event","event":"telemetry","body":{"telemetryEventName":"projectInfo","payload":{"projectId":"e10a1dc99ee63f16cb9b69bcee75540cdf41a1137371d3afbd4e7de507be5207","fileStats":{"js":0,"jsSize":0,"jsx":0,"jsxSize":0,"ts":1,"tsSize":10,"tsx":0,"tsxSize":0,"dts":1,"dtsSize":334,"deferred":0,"deferredSize":0},"compilerOptions":{},"typeAcquisition":{"enable":false,"include":false,"exclude":false},"extends":false,"files":false,"include":false,"exclude":false,"compileOnSave":false,"configFileName":"tsconfig.json","projectType":"configured","languageServiceEnabled":true,"version":"FakeVersion"}}}
event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/a/b/app.ts","configFile":"/a/b/tsconfig.json","diagnostics":[]}}
Project '/a/b/tsconfig.json' (Configured)
	Files (2)

-----------------------------------------------
Open files: 
	FileName: /a/b/app.ts ProjectRootPath: undefined
		Projects: /a/b/tsconfig.json
response:{"responseRequired":false}
FileWatcher:: Triggered with /a/b/tsconfig.json 1:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Scheduled: /a/b/tsconfig.json
Scheduled: *ensureProjectForOpenFiles*
Elapsed:: *ms FileWatcher:: Triggered with /a/b/tsconfig.json 1:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Running: /a/b/tsconfig.json
Reloading configured project /a/b/tsconfig.json
event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/a/b/tsconfig.json","reason":"Change in config file detected"}}
Config: /a/b/tsconfig.json : {
 "rootNames": [
  "/a/b/app.ts"
 ],
 "options": {
  "configFilePath": "/a/b/tsconfig.json"
 }
}
Plugins were requested but not running in environment that supports 'require'. Nothing will be loaded
Starting updateGraphWorker: Project: /a/b/tsconfig.json
Finishing updateGraphWorker: Project: /a/b/tsconfig.json Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Different program with same set of files
event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/a/b/tsconfig.json"}}
event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/a/b/tsconfig.json","configFile":"/a/b/tsconfig.json","diagnostics":[{"start":{"line":3,"offset":21},"end":{"line":3,"offset":27},"text":"Unknown compiler option 'haha'.","code":5023,"category":"error","fileName":"/a/b/tsconfig.json"}]}}
Running: *ensureProjectForOpenFiles*
Before ensureProjectForOpenFiles:
Project '/a/b/tsconfig.json' (Configured)
	Files (2)

-----------------------------------------------
Open files: 
	FileName: /a/b/app.ts ProjectRootPath: undefined
		Projects: /a/b/tsconfig.json
After ensureProjectForOpenFiles:
Project '/a/b/tsconfig.json' (Configured)
	Files (2)

-----------------------------------------------
Open files: 
	FileName: /a/b/app.ts ProjectRootPath: undefined
		Projects: /a/b/tsconfig.json
got projects updated in background, updating diagnostics for /a/b/app.ts
event:
    {"seq":0,"type":"event","event":"projectsUpdatedInBackground","body":{"openFiles":["/a/b/app.ts"]}}
FileWatcher:: Triggered with /a/b/tsconfig.json 1:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Scheduled: /a/b/tsconfig.json
Scheduled: *ensureProjectForOpenFiles*
Elapsed:: *ms FileWatcher:: Triggered with /a/b/tsconfig.json 1:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Reloading configured project /a/b/tsconfig.json
event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/a/b/tsconfig.json","reason":"Change in config file detected"}}
Config: /a/b/tsconfig.json : {
 "rootNames": [
  "/a/b/app.ts"
 ],
 "options": {
  "configFilePath": "/a/b/tsconfig.json"
 }
}
Plugins were requested but not running in environment that supports 'require'. Nothing will be loaded
Starting updateGraphWorker: Project: /a/b/tsconfig.json
Finishing updateGraphWorker: Project: /a/b/tsconfig.json Version: 3 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Different program with same set of files
event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/a/b/tsconfig.json"}}
event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/a/b/tsconfig.json","configFile":"/a/b/tsconfig.json","diagnostics":[]}}
event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/a/b/app.ts","diagnostics":[]}}
Running: /a/b/tsconfig.json
Running: *ensureProjectForOpenFiles*
Before ensureProjectForOpenFiles:
Project '/a/b/tsconfig.json' (Configured)
	Files (2)

-----------------------------------------------
Open files: 
	FileName: /a/b/app.ts ProjectRootPath: undefined
		Projects: /a/b/tsconfig.json
After ensureProjectForOpenFiles:
Project '/a/b/tsconfig.json' (Configured)
	Files (2)

-----------------------------------------------
Open files: 
	FileName: /a/b/app.ts ProjectRootPath: undefined
		Projects: /a/b/tsconfig.json
got projects updated in background, updating diagnostics for /a/b/app.ts
event:
    {"seq":0,"type":"event","event":"projectsUpdatedInBackground","body":{"openFiles":["/a/b/app.ts"]}}