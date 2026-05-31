const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const roles = require('../middleware/roles')

// Only Admin role
router.get('/dashboard', auth, roles('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin', role: req.user.role })
})

// Admin and Moderator
router.get('/reports', auth, roles('admin', 'moderator'), (req, res) => {
  res.json({ message: 'Reports section', role: req.user.role })
})

// All Roles 
router.get('/profile', auth, roles('admin', 'user', 'moderator'), (req, res) => {
  res.json({ message: `Hello ${req.user.role}`, id: req.user.id })
})

module.exports = router