CREATE TABLE equipment_checkouts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    checked_out_by VARCHAR(100) NOT NULL,
    checkout_date DATE NOT NULL,
    return_date DATE NULL,
    is_returned BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO equipment_checkouts
(item_name, checked_out_by, checkout_date, return_date, is_returned)
VALUES
('Laptop - Dell XPS 13', 'Alex Johnson', '2024-10-01', NULL, FALSE),
('Projector - Epson 2150', 'Maria Lopez', '2024-09-28', '2024-10-02', TRUE),
('HDMI Adapter', 'Chris Nguyen', '2024-10-03', NULL, FALSE),
('Microphone - Blue Yeti', 'Samantha Reed', '2024-09-25', '2024-09-26', TRUE),
('Webcam - Logitech C920', 'Daniel Kim', '2024-10-04', NULL, FALSE),
('Tablet - iPad Air', 'Jordan Smith', '2024-09-30', '2024-10-01', TRUE),
('USB-C Hub', 'Priya Patel', '2024-10-02', NULL, FALSE),
('Portable Speaker', 'Ethan Brown', '2024-09-27', '2024-09-29', TRUE);
