# SPEED Website Proof-of-Concept
![image](https://user-images.githubusercontent.com/104743984/213351475-1f1840fd-fdbc-4446-b1ed-df4ac7a8ff8d.png)
SPEED website using React, Node, Express and MongoDB.

# Submit an article
Able to submit an article which is then saved to the MongoDB collection, ArticleDB.
![image](https://user-images.githubusercontent.com/104743984/213353680-0a1f8e09-5160-4504-83ae-1c34e6a44c84.png)
![image](https://user-images.githubusercontent.com/104743984/213353721-9533d553-241d-404f-b631-39358a983c70.png)

# Save to moderate articles table
The article is then saved to the moderateArticles DB. The user can choose to accept or deny the article.
![image](https://user-images.githubusercontent.com/104743984/213353468-23cb4589-7fb0-4698-8c34-f95564d62f8a.png)
![image](https://user-images.githubusercontent.com/104743984/213354182-12d6a551-8db8-4ce5-91cc-ed5d520d2651.png)

# Moved to analyse articles table
If the article is accepted then it will be moved to the analysis articles table. If the article is denied then it is deleted from ArticleDB.
![image](https://user-images.githubusercontent.com/104743984/213353421-c10bad38-5db1-4a8d-b522-30cad59ae04e.png)
