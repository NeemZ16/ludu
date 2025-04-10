package main

import (
	"github.com/NeemZ16/ludu/internal/auth"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
)

func main() {
	r := gin.Default()

	// set frontend with fallback
	frontend := os.Getenv("FRONTEND")
	if frontend == "" {
		frontend = "http://localhost:8080"
	}

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{frontend},
		AllowHeaders: []string{"Content-Type"},
		AllowCredentials: true,
	}))

	r.GET("/demo", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"data": "resource data",
		})
	})

	r.POST("/login", auth.DevAuth)
	r.POST("/register", auth.DevAuth)

	r.Run(":8000") // Listen and serve on 0.0.0.0:8000
}
