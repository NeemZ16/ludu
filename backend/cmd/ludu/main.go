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

	// get env vars
	frontend := os.Getenv("FRONTEND_URL")
	port := os.Getenv("BACKEND_PORT")

	// cors settings
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{frontend},
		AllowHeaders: []string{"Content-Type"},
		AllowCredentials: true,
	}))

	// ---- ROUTES ----
	r.GET("/demo", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"data": "resource data",
		})
	})

	r.POST("/login", auth.DevAuth)
	r.POST("/register", auth.DevAuth)

	r.Run(port)
}
