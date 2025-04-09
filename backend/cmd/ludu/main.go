package main

import (
	"github.com/NeemZ16/ludu/internal/auth"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:8080"},
		AllowHeaders: []string{"Content-Type"},
	}))

	r.GET("/demo", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"data": "resource data",
		})
	})

	r.POST("/login", auth.DevAuth)
	r.POST("/register", auth.DevAuth)

	r.Run(":8080") // Listen and serve on 0.0.0.0:8080
}
