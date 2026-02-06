import * as equipmentService from '../services/equipment.service.js';

export const getAll = async (req, res) => {
    try {
        const records = await equipmentService.getAll();
        res.json({ message: 'OK', data: records });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error', data: null });
    }
};

export const getById = async (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) return res.status(400).json({ message: 'Invalid id', data: null });

    try {
        const record = await equipmentService.getById(id);
        if (!record) return res.status(404).json({ message: 'Not found', data: null });

        res.json({ message: 'OK', data: record });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error', data: null });
    }
};

export const create = async (req, res) => {
    const { itemName, checkedOutBy, checkoutDate } = req.body;

    if (!itemName || !checkedOutBy || !checkoutDate) return res.status(400).json({ message: 'Missing required fields', data: null });

    try {
        const created = await equipmentService.create({
            itemName,
            checkedOutBy,
            checkoutDate
        });

        res.status(201).json({ message: 'Created', data: created });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error', data: null });
    }
};

export const update = async (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) return res.status(400).json({ message: 'Invalid id', data: null });

    try {
        const updated = await equipmentService.update(id, req.body);
        if (!updated) return res.status(404).json({ message: 'Not found', data: null });

        res.json({ message: 'Updated', data: updated });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error', data: null });
    }
};

export const remove = async (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) return res.status(400).json({ message: 'Invalid id', data: null });

    try {
        const removed = await equipmentService.remove(id);
        if (!removed) return res.status(404).json({ message: 'Not found', data: null });

        res.json({ message: 'Deleted', data: removed });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error', data: null });
    }
};
