package main

import (
	"io"
	"log"
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

func main() {
	router := gin.Default()
	router.POST("/build", buildTree)
	router.Run("localhost:8080")
}
