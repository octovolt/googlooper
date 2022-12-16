# Googlooper
Audio and video looper for files stored on Google Drive

This was originally developed to aid musicians like myself in learning and rehearsing music. However, I am excited to use this tool to do create both audio and video loops as part of a creative process of deconstructing and reprocessing the original source material to create new artwork. I hope you find interesting ways to use it as well. Please enjoy!

How to Use Googlooper
---
To load a file into Googlooper, one has to first get a shareable link to the file. On Google Drive, you can right-click on the file you want to load and see a contextual menu appear. Within this contextual menu, select Share. A dialog will appear, and then you can click on Copy Link in the lower left corner. Paste this link into a text document. Then you want to copy the file id from the link and paste it into Googlooper. For example, in the following link:

```
https://drive.google.com/file/d/1et2nM9a1eq5WgRbomOMw7S_z6L8_9kcm/view?usp=sharing
```

the file ID is

```
1et2nM9a1eq5WgRbomOMw7S_z6L8_9kcm
``` 

Future Improvements
---
I am hopeful that this tool can grow over time to become more user-friendly and to handle the looping of audio and video across a wide range of browsers. Pull requests that push the tool in this direction would be highly appreciated.

In particular, the following issues need to be addressed as soon as possible:

* The files do not play on Mobile Safari. This needs to be fixed.
* It is somewhat difficult to get a shareable link, copy the file ID out of it, and then paste it into the Googlooper. Ideally, the tool would provide a file browser to help the user pick out which file to use.
* While I like the stark visual aesthetic, it could be improved. The buttons don't match the height of the input fields on all browsers, for example.
