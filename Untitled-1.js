const STORAGE_KEY = "photography-gallery";
const list = document.getElementById("list");
const form = document.getElementById("photo-form");
const sampleEntries = [
	{ title: "Rocks", location: "Lake Side", description: "A quiet morning and a lovely view." },
	{ title: "Sunset", location: "Nairobi", description: "Golden light just before evening." },
];

let entries = [];

function loadEntries() {
	const savedEntries = localStorage.getItem(STORAGE_KEY);
	if (savedEntries) {
		entries = JSON.parse(savedEntries);
		return;
	}
	entries = sampleEntries;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function renderList() {
	if (!list) return;
	list.innerHTML = "";
	entries.forEach((entry) => {
		const item = document.createElement("li");
		item.textContent = `${entry.title} - ${entry.location}: ${entry.description}`;
		list.appendChild(item);
	});
}

function handleSubmit(event) {
	event.preventDefault();
	const data = new FormData(form);
	const title = String(data.get("title") || "").trim();
	const location = String(data.get("location") || "").trim();
	const description = String(data.get("description") || "").trim();
	if (!title || !location) return;

	entries.unshift({ title, location, description });
	localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
	renderList();
	form.reset();
}

if (form) form.addEventListener("submit", handleSubmit);
loadEntries();
renderList();



















































































































