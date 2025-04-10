package auth

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"fmt"
)

func DevAuth(c *gin.Context) {
	c.SetCookie("sessionToken", uuid.NewString(), 3600, "/", "", false, true)
	fmt.Println("DEV AUTH CALLED")

	// send a plain text message in the body
	c.String(200, "developer authentication successful!")
}
