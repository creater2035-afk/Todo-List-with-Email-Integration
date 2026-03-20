const initialCategories = [
  {
    title: "Personal",
    img: "human.png",
  },
  {
    title: "Work",
    img: "briefcase.png",
  },
  {
    title: "Shopping",
    img: "shopping.png",
  },
  {
    title: "Coding",
    img: "web-design.png",
  },
  {
    title: "Health",
    img: "healthcare.png",
  },
  {
    title: "Fitness",
    img: "dumbbell.png",
  },
  {
    title: "Education",
    img: "education.png",
  },
  {
    title: "Finance",
    img: "saving.png",
  },
];

let categories = [...initialCategories];

let tasks = [
  {
    id: 1,
    task: "Go to market",
    category: "Shopping",
    date: "2026-03-01",
    time: "10:00",
    completed: false,
  },
  {
    id: 2,
    task: "Read a chapter of a book",
    category: "Personal",
    date: "2026-03-01",
    time: "11:00",
    completed: false,
  },
  {
    id: 3,
    task: "Prepare presentation for meeting",
    category: "Work",
    date: "2026-03-01",
    time: "09:00",
    completed: false,
  },
  {
    id: 4,
    task: "Complete coding challenge",
    category: "Coding",
    date: "2026-03-01",
    time: "10:30",
    completed: false,
  },
  {
    id: 5,
    task: "Take a 30-minute walk",
    category: "Health",
    date: "2026-03-01",
    time: "05:00",
    completed: false,
  },
  {
    id: 6,
    task: "Do a 20-minute HIIT workout",
    category: "Fitness",
    date: "2026-03-01",
    time: "05:30",
    completed: false,
  },
  {
    id: 7,
    task: "Watch an educational video online",
    category: "Education",
    date: "2026-03-01",
    time: "16:30",
    completed: false,
  },
  {
    id: 8,
    task: "Review monthly budget",
    category: "Finance",
    date: "2026-03-01",
    time: "17:30",
    completed: false,
  },
  {
    id: 9,
    task: "Buy groceries for the week",
    category: "Shopping",
    date: "2026-03-01",
    time: "18:00",
    completed: false,
  },
  {
    id: 10,
    task: "Write in a journal",
    category: "Personal",
    date: "2026-03-01",
    time: "19:00",
    completed: false,
  },
  {
    id: 11,
    task: "Send follow-up emails",
    category: "Work",
    date: "2026-03-01",
    time: "20:00",
    completed: false,
  },
  {
    id: 12,
    task: "Work on a coding side project",
    category: "Coding",
    date: "2026-03-01",
    time: "21:00",
    completed: false,
  },
  {
    id: 13,
    task: "Try a new healthy recipe",
    category: "Health",
    date: "2026-03-01",
    time: "22:00",
    completed: false,
  },
  {
    id: 14,
    task: "Attend a yoga class",
    category: "Fitness",
    date: "2026-03-01",
    time: "23:00",
    completed: false,
  },
  {
    id: 15,
    task: "Read an article about a new topic",
    category: "Education",
    date: "2026-03-01",
    time: "23:30",
    completed: false,
  },
  {
    id: 16,
    task: "Set up automatic bill payments",
    category: "Finance",
    date: "2026-03-01",
    time: "23:30",
    completed: false,
  },
  // Additional tasks for each category
  {
    id: 17,
    task: "Buy new clothes",
    category: "Shopping",
    date: "2026-03-01",
    time: "23:30",
    completed: false,
  },
  {
    id: 18,
    task: "Meditate for 10 minutes",
    category: "Personal",
    date: "2026-03-01",
    time: "23:30",
    completed: false,
  },
  {
    id: 19,
    task: "Prepare agenda for team meeting",
    category: "Work",
    date: "2026-03-01",
    time: "23:30",
    completed: false,
  },
  {
    id: 20,
    task: "Debug a software issue",
    category: "Coding",
    date: "2026-03-01",
    time: "23:30",
    completed: false,
  },
  {
    id: 21,
    task: "Try a new recipe for lunch",
    category: "Health",
    date: "2026-03-01",
    time: "23:30",
    completed: false,
  },
  {
    id: 22,
    task: "Go for a run",
    category: "Fitness",
    date: "2026-03-01",
    time: "23:30",
    completed: false,
  },
  {
    id: 23,
    task: "Learn a new language online",
    category: "Education",
    date: "2026-03-01",
    time: "23:30",
    completed: false,
  },
  {
    id: 24,
    task: "Read about history",
    category: "Education",
    date: "2026-03-01",
    time: "23:30",
    completed: false,
  },
  {
    id: 25,
    task: "Review investment portfolio",
    category: "Finance",
    date: "2026-03-01",
    time: "23:30",
    completed: false,
  },

  // Add more tasks for each category as desired
];

// Define functions
const saveLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("categories", JSON.stringify(categories));
};

const getLocal = () => {
  const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
  if (tasksLocal) {
    tasks = tasksLocal;
  }
  if (categoriesLocal && categoriesLocal.length > 0) {
    categories = categoriesLocal;
  } else {
    // Fallback if storage is empty or broken
    categories = [...initialCategories];
  }
  // Sync selectedCategory after loading from storage
  selectedCategory = categories[0];
};

const toggleScreen = () => {
  screenWrapper.classList.toggle("show-category");
};



const updateTotals = () => {
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  numTasks.innerHTML = `${categoryTasks.length} Tasks`;
  totalTasks.innerHTML = tasks.length;
};

const renderCategories = () => {
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
    const div = document.createElement("div");
    div.classList.add("category");
    div.addEventListener("click", () => {
      screenWrapper.classList.toggle("show-category");
      selectedCategory = category;
      updateTotals();
      categoryTitle.innerHTML = category.title;
      categoryImg.src = `images/${category.img}`;
      renderTasks();
    });

    div.innerHTML = `
                  <div class="left">
                <img src="images/${category.img}"
                 alt="${category.title}"
                  />
                <div class="content">
                  <h1>${category.title}</h1>
                  <p>${categoryTasks.length} Tasks</p>
                </div>
              </div>
              <div class="options">
                <div class="toggle-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </div>
              </div>
              <div class="options-menu">
                <button class="add-task-opt">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Add
                </button>
                <button class="delete-cat">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Delete
                </button>
              </div>
    `;

    const toggleBtn = div.querySelector(".toggle-btn");
    const optionsMenu = div.querySelector(".options-menu");

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      // Hide other menus first
      document.querySelectorAll(".options-menu").forEach(menu => {
        if (menu !== optionsMenu) menu.classList.remove("active");
      });
      optionsMenu.classList.toggle("active");
    });

    const addBtnOpt = div.querySelector(".add-task-opt");
    addBtnOpt.addEventListener("click", (e) => {
      e.stopPropagation();
      optionsMenu.classList.remove("active");
      categorySelect.value = category.title.toLowerCase();
      toggleAddTaskForm();
    });

    const deleteBtnCat = div.querySelector(".delete-cat");
    deleteBtnCat.addEventListener("click", (e) => {
      e.stopPropagation();
      optionsMenu.classList.remove("active");
      if (confirm(`Are you sure you want to delete the "${category.title}" category and all its tasks?`)) {
        deleteCategory(category.title);
      }
    });

    categoriesContainer.appendChild(div);
  });
};

// Close any open menus when clicking anywhere else
document.addEventListener("click", () => {
  document.querySelectorAll(".options-menu").forEach(menu => menu.classList.remove("active"));
  if (typeof categoryOptionsMenu !== "undefined" && categoryOptionsMenu) {
    categoryOptionsMenu.classList.remove("active");
  }
});

const renderTasks = () => {
  tasksContainer.innerHTML = "";
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );

  if (categoryTasks.length === 0) {
    tasksContainer.innerHTML = `<p class="no-tasks">No tasks added for this category</p>`;
  } else {
    categoryTasks.forEach((task) => {
      const div = document.createElement("div");
      div.classList.add("task-wrapper");
      const label = document.createElement("label");
      label.classList.add("task");
      label.setAttribute("for", task.id);
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = task.id;
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks[index].completed = !tasks[index].completed;
        saveLocal();
      });
      div.innerHTML = `
      <div class="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
              `;
      label.innerHTML = `
              <span class="checkmark"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <div class="task-details">
                <p>${task.task}</p>
                ${task.date || task.time ? `
                <div class="task-schedule">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>${task.date ? task.date : ''} ${task.time ? task.time : ''}</span>
                </div>` : ''}
              </div>
        `;
      label.prepend(checkbox);
      div.prepend(label);
      tasksContainer.appendChild(div);

      const deleteBtn = div.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks.splice(index, 1);
        saveLocal();
        renderTasks();
      });
    });
  }

  // render categories and totals regardless of whether the current
  // category has tasks so the menu always shows up
  renderCategories();
  updateTotals();
};

const toggleAddTaskForm = () => {
  addTaskWrapper.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
  addTaskBtn.classList.toggle("active");

  if (addTaskWrapper.classList.contains("active")) {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0].substring(0, 5);
    dateInput.value = date;
    timeInput.value = time;

    // Sync category select with currently selected category
    if (selectedCategory) {
      categorySelect.value = selectedCategory.title.toLowerCase();
    }
  }
};

const toggleAddCategoryForm = () => {
  addCategoryModal.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
};

// User & Settings Management
const sessionKey = 'agalya_session';
const settingsKey = 'agalya_settings';

let currentUser = JSON.parse(localStorage.getItem(sessionKey));

// === EmailJS Configuration ===
// 1. Log in to https://www.emailjs.com/
// 2. Create a Service and Template
// 3. Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' here:
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_rxxzxla',
  TEMPLATE_ID: 'template_0nmmi8c'
};
// =============================

let settings = JSON.parse(localStorage.getItem(settingsKey)) || {
  notifyEmail: currentUser ? currentUser.email : '',
  emailEnabled: false
};

const checkAuth = () => {
  if (!currentUser) {
    window.location.href = 'auth.html';
  } else {
    const welcomeUser = document.getElementById('welcome-user');
    if (welcomeUser) {
      welcomeUser.innerText = `Hello ${currentUser.name.split(' ')[0]}`;
    }

    const userAvatar = document.getElementById('user-avatar');
    if (userAvatar && currentUser.picture) {
      userAvatar.src = currentUser.picture;
    }

    const settingsAvatar = document.getElementById('settings-avatar');
    if (settingsAvatar && currentUser.picture) {
      settingsAvatar.src = currentUser.picture;
    }

    const settingsName = document.getElementById('settings-name');
    if (settingsName) settingsName.innerText = currentUser.name;

    const settingsEmail = document.getElementById('settings-email');
    if (settingsEmail) settingsEmail.innerText = currentUser.email;

    const notifyEmailInput = document.getElementById('notify-email');
    if (notifyEmailInput) notifyEmailInput.value = settings.notifyEmail;

    const emailToggleInput = document.getElementById('email-toggle');
    if (emailToggleInput) emailToggleInput.checked = settings.emailEnabled;
  }
};

const logout = () => {
  localStorage.removeItem(sessionKey);
  window.location.href = 'auth.html';
};

const saveSettings = () => {
  settings.notifyEmail = document.getElementById('notify-email').value;
  settings.emailEnabled = document.getElementById('email-toggle').checked;
  localStorage.setItem(settingsKey, JSON.stringify(settings));
  toggleSettingsModal();
  showToast("Settings saved successfully!");
};

const toggleSettingsModal = () => {
  document.getElementById('settings-modal').classList.toggle('active');
  blackBackdrop.classList.toggle('active');
};

const sendEmailNotification = (task) => {
  if (!settings.emailEnabled || !settings.notifyEmail) return;

  const templateParams = {
    to_email: settings.notifyEmail,
    user_name: currentUser.name,
    task_title: task.task,
    category: task.category,
    task_time: `${task.date} at ${task.time}`
  };

  emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
    .then(() => {
      console.log('Email sent successfully!');
      showToast(`Reminder sent to ${settings.notifyEmail}`);
    }, (error) => {
      console.error('Email failed...', error);
    });
};

const sendTestEmail = () => {
  if (!settings.notifyEmail) {
    alert("Please enter a notification email in settings first.");
    return;
  }

  const templateParams = {
    to_email: settings.notifyEmail,
    user_name: currentUser.name,
    task_title: "Test Notification",
    category: "System",
    task_time: new Date().toLocaleString()
  };

  showToast("Sending test email...");

  emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
    .then(() => {
      showToast("Test email sent success!");
    }, (error) => {
      console.error('Test failed...', error);
      alert("Email failed to send. Check if you've set your EmailJS keys in index.html and script.js.");
    });
};

const checkSchedules = () => {
  const now = new Date();

  // Format local date as YYYY-MM-DD
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const currentDate = `${year}-${month}-${day}`;

  // Format local time as HH:MM
  const currentTime = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');

  tasks.forEach(task => {
    // Check if task matches current local date/time AND global settings are enabled AND per-task alert is enabled
    if (!task.completed &&
      task.date === currentDate &&
      task.time === currentTime &&
      !task.notified &&
      settings.emailEnabled &&
      task.notifyEmail) {
      sendEmailNotification(task);
      task.notified = true;
      saveLocal();
    }
  });
};

// Start schedule checker every minute
setInterval(checkSchedules, 60000);

const addTask = (e) => {
  e.preventDefault();
  const task = taskInput.value;

  // Safety check for category selection
  if (!categorySelect.options[categorySelect.selectedIndex]) {
    alert("Please select a valid category or add one first.");
    return;
  }

  const categoryTitleStr = categorySelect.options[categorySelect.selectedIndex].text;
  const date = dateInput.value;
  const time = timeInput.value;

  const taskEmailNotify = document.getElementById("task-email-notify").checked;

  if (task === "") {
    alert("Please enter a task");
  } else {
    const newTask = {
      id: tasks.length + 1,
      task,
      category: categoryTitleStr,
      date,
      time,
      completed: false,
      notifyEmail: taskEmailNotify,
      notified: false
    };
    taskInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
    document.getElementById("task-email-notify").checked = false;
    tasks.push(newTask);
    saveLocal();
    toggleAddTaskForm();
    renderTasks();
  }
};

const deleteCategory = (categoryTitle) => {
  categories = categories.filter((c) => c.title !== categoryTitle);
  tasks = tasks.filter((t) => t.category !== categoryTitle);
  saveLocal();
  renderCategories();

  // Update category select options
  renderCategorySelect();
};

const renderCategorySelect = () => {
  categorySelect.innerHTML = "";
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);
  });
};

const addCategory = () => {
  const title = categoryTitleInput.value.trim();
  const icon = categoryIconSelect.value;

  if (title === "") {
    alert("Please enter a category title");
    return;
  }

  // Check if category already exists
  if (categories.some(c => c.title.toLowerCase() === title.toLowerCase())) {
    alert("This category already exists!");
    return;
  }

  const newCategory = {
    title: title,
    img: icon
  };

  categories.push(newCategory);
  saveLocal();
  renderCategories();
  renderCategorySelect();

  categoryTitleInput.value = "";
  toggleAddCategoryForm();
  showToast(`Category "${title}" added!`);
};

// Initialize variables and DOM elements
let selectedCategory = categories[0];
const categoriesContainer = document.querySelector(".categories");
const screenWrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".menu-btn");
const backBtn = document.querySelector(".back-btn");
const tasksContainer = document.querySelector(".tasks");
const numTasks = document.getElementById("num-tasks");
const categoryTitle = document.getElementById("category-title");
const categoryImg = document.getElementById("category-img");
const categorySelect = document.getElementById("category-select");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");
const addTaskWrapper = document.querySelector(".add-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskInput = document.getElementById("task-input");
const blackBackdrop = document.querySelector(".black-backdrop");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const totalTasks = document.getElementById("total-tasks");
const profileBtn = document.getElementById("profile-btn");

const addCategoryBtn = document.getElementById("add-category-btn");
const addCategoryModal = document.getElementById("add-category-modal");
const categoryTitleInput = document.getElementById("category-title-input");
const categoryIconSelect = document.getElementById("category-icon-select");
const cancelCatBtn = document.getElementById("cancel-cat-btn");
const saveCatBtn = document.getElementById("save-cat-btn");

profileBtn.addEventListener("click", toggleSettingsModal);

const categoryOptionsBtn = document.querySelector(".category-screen .options svg");
const categoryOptionsMenu = document.getElementById("category-options-menu");
const addTaskCategoryOpt = document.getElementById("add-task-category-opt");
const deleteCategoryOpt = document.getElementById("delete-category-opt");

categoryOptionsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  categoryOptionsMenu.classList.toggle("active");
});

addTaskCategoryOpt.addEventListener("click", () => {
  categoryOptionsMenu.classList.remove("active");
  categorySelect.value = selectedCategory.title.toLowerCase();
  toggleAddTaskForm();
});

deleteCategoryOpt.addEventListener("click", () => {
  categoryOptionsMenu.classList.remove("active");
  if (confirm(`Are you sure you want to delete the "${selectedCategory.title}" category?`)) {
    deleteCategory(selectedCategory.title);
    toggleScreen(); // Go back home
  }
});

// Attach event listeners
menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);
addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);
addBtn.addEventListener("click", addTask);
cancelBtn.addEventListener("click", toggleAddTaskForm);

addCategoryBtn.addEventListener("click", toggleAddCategoryForm);
cancelCatBtn.addEventListener("click", toggleAddCategoryForm);
saveCatBtn.addEventListener("click", addCategory);

// Render initial state
checkAuth();
getLocal();
renderCategories();
renderTasks();
renderCategorySelect();
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

async function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";

  recognition.onresult = async function (event) {
    let userMessage = event.results[0][0].transcript;
    const userTextElem = document.getElementById("userText");
    if (userTextElem) userTextElem.innerText = "You: " + userMessage;

    // Update category title directly as requested
    if (categoryTitle) {
      categoryTitle.textContent = userMessage;
    }

    // Open "Add Task" modal with transcribed text
    if (taskInput) {
      taskInput.value = userMessage;
      if (selectedCategory) {
        categorySelect.value = selectedCategory.title.toLowerCase();
      }
      if (!addTaskWrapper.classList.contains("active")) {
        toggleAddTaskForm();
      }
      showToast(`Task ready to schedule!`);
    }

    // Transcribe to AI assistant display (optional feedback)
    const aiTextElem = document.getElementById("aiText");
    if (aiTextElem) aiTextElem.innerText = "Assistant: Please pick a date and time.";
  };

  recognition.start();
}

function speak(text) {
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}



function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.classList.add("toast-container");
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = `
        <span class="toast-icon">✓</span>
        <span class="toast-message">${message}</span>
    `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("removing");
    setTimeout(() => {
      toast.remove();
      if (container.children.length === 0) {
        container.remove();
      }
    }, 300);
  }, 3000);
}
