export async function loadEmployeeData() {
    try {
        const response = await fetch("js/data/employees.json");
        if (!response.ok) {
            throw new Error(`Response error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
