
here is the script that created the analysisreport.zip file

```bash
set act=glasswallfiledrop

start cmd /c powershell -Command "mkdir c:/Demo/download-blob ; 
                                  cd /Demo/download-blob ; 
                                  az storage blob download-batch --destination . --pattern *.xml --source analysisreports --account-name %act%; 
                                  cd c:\Demo ; Compress-Archive -Path C:\Demo\download-blob -DestinationPath blobs.zip"
```
