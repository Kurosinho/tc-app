package main

import (
	"io"
	"log"
	"net/http"
	"tc-app/tree"

	"github.com/gin-gonic/gin"
)

func buildTree(c *gin.Context) {
	treeData, err := io.ReadAll(c.Request.Body)
	if err != nil {
		log.Fatal(err)
	}
	newTree := tree.Build(treeData)
	c.JSON(200, gin.H{"response": newTree})
}

func index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"content": "This is the main page for Assistant to Traffic Control",
	})
}

func generator(c *gin.Context) {
	c.HTML(http.StatusOK, "generator.html", gin.H{
		"content": "This is the tree generator page",
	})
}

func documentation(c *gin.Context) {
	c.HTML(http.StatusOK, "documentation.html", gin.H{
		"content": "This is the documentation page",
	})
}

func main() {
	router := gin.Default()
	router.Static("/styles", "./styles/")
	router.Static("/images", "./images/")
	router.LoadHTMLGlob("templates/*.html")
	router.GET("/", index)
	router.GET("/generator", generator)
	router.GET("/docs", documentation)
	router.POST("/build", buildTree)
	router.Run("localhost:8080")
}
