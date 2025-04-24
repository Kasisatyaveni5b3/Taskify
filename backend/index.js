const express = require('express');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json());

    // Create a task
    app.post('/api/tasks', async (req, res) => {
        const { task_name, status, end_date } = req.body;
        try {
          const result = await pool.query(
            'INSERT INTO tasks (task_name, status, end_date) VALUES ($1, $2, $3) RETURNING *',
            [task_name, status, end_date]
          );
          res.status(201).json(result.rows[0]);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      });
      
      // Read all tasks
      app.get('/api/tasks', async (req, res) => {
        try {
          const result = await pool.query('SELECT * FROM tasks ORDER BY id');
          res.json(result.rows);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });
      
      // Read a single task by ID
      app.get('/api/tasks/:id', async (req, res) => {
        const { id } = req.params;
        try {
          const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
          if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Task not found' });
          }
          res.json(result.rows[0]);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });
      
      // Update a task
      app.put('/api/tasks/:id', async (req, res) => {
        const { id } = req.params;
        const { task_name, status, end_date } = req.body;
        try {
          const result = await pool.query(
            'UPDATE tasks SET task_name = $1, status = $2, end_date = $3 WHERE id = $4 RETURNING *',
            [task_name, status, end_date, id]
          );
          if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Task not found' });
          }
          res.json(result.rows[0]);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      });
      
      // Delete a task
      app.delete('/api/tasks/:id', async (req, res) => {
        const { id } = req.params;
        try {
          const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
          if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Task not found' });
          }
          res.json({ message: 'Task deleted successfully' });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });

app.listen('5000','localhost', () => {

  
})