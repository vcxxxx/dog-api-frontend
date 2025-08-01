const styles = {
  container: {
    maxWidth: 900,
    margin: "20px auto",
    padding: "20px 40px",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    color: "#222",
    fontSize: 28,
    fontWeight: "700",
  },
  searchInput: {
    padding: "10px 14px",
    fontSize: 16,
    borderRadius: 6,
    border: "1px solid #ccc",
    marginBottom: 20,
    width: "100%",
    boxSizing: "border-box",
  },
  dogListContainer: {
    flex: 1,
    overflowY: "auto",
    border: "1px solid #ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 16,
    boxSizing: "border-box",
  },
  dogItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    borderBottom: "1px solid #eee",
    transition: "background-color 0.2s",
  },
  dogText: {
    fontSize: 24,
    color: "#222",
  },
  input: {
    flex: 1,
    padding: "10px 14px",
    fontSize: 16,
    borderRadius: 6,
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    borderRadius: 6,
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonSecondary: {
    backgroundColor: "#6c757d",
  },
  addForm: {
    display: "flex",
    gap: 12,
    marginBottom: 24,
  },
  editInput: {
  padding: "8px 12px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  borderRadius: "4px",
},
  buttonGroup: {
    display: "flex",
    gap: 12,
  },
  error: {
    color: "red",
    marginBottom: 20,
    fontWeight: "700",
    textAlign: "center",
  },
};

export default styles;