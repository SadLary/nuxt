<template>
  <div class="desktop_catalog_filters-wrapper">
    <div class="desktop_catalog_filters">
      <div class="desktop_catalog_filters_item">
        <div class="desktop_catalog_filters_item_input-group">
          <input type="text" class="desktop_catalog_filters_item_input" @click="dropdown">
          <span class="desktop_catalog_filters_item_input-custom-label">TGC</span>
        </div>
        <div class="desktop_catalog_filters_item_dropdown">
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Unknown</label>
            <input type="radio" value="Unknown">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>High 15-20%</label>
            <input type="radio" value="High 15-20%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>The average 10-15%</label>
            <input type="radio" value="The average 10-15%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Very high above 20%</label>
            <input type="radio" value="Very high above 20%">
          </div>
        </div>
      </div>
      <div class="desktop_catalog_filters_item">
        <div class="desktop_catalog_filters_item_input-group">
          <input type="text" class="desktop_catalog_filters_item_input" @click="dropdown">
          <span class="desktop_catalog_filters_item_input-custom-label">TGC</span>
        </div>
        <div class="desktop_catalog_filters_item_dropdown">
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Unknown</label>
            <input type="radio" value="Unknown">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>High 15-20%</label>
            <input type="radio" value="High 15-20%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>The average 10-15%</label>
            <input type="radio" value="The average 10-15%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Very high above 20%</label>
            <input type="radio" value="Very high above 20%">
          </div>
        </div>
      </div>
      <div class="desktop_catalog_filters_item">
        <div class="desktop_catalog_filters_item_input-group">
          <input type="text" class="desktop_catalog_filters_item_input" @click="dropdown">
          <span class="desktop_catalog_filters_item_input-custom-label">TGC</span>
        </div>
        <div class="desktop_catalog_filters_item_dropdown">
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Unknown</label>
            <input type="radio" value="Unknown">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>High 15-20%</label>
            <input type="radio" value="High 15-20%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>The average 10-15%</label>
            <input type="radio" value="The average 10-15%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Very high above 20%</label>
            <input type="radio" value="Very high above 20%">
          </div>
        </div>
      </div>
      <div class="desktop_catalog_filters_item">
        <div class="desktop_catalog_filters_item_input-group">
          <input type="text" class="desktop_catalog_filters_item_input" @click="dropdown">
          <span class="desktop_catalog_filters_item_input-custom-label">TGC</span>
        </div>
        <div class="desktop_catalog_filters_item_dropdown">
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Unknown</label>
            <input type="radio" value="Unknown">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>High 15-20%</label>
            <input type="radio" value="High 15-20%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>The average 10-15%</label>
            <input type="radio" value="The average 10-15%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Very high above 20%</label>
            <input type="radio" value="Very high above 20%">
          </div>
        </div>
      </div>
      <div class="desktop_catalog_filters_item">
        <div class="desktop_catalog_filters_item_input-group">
          <input type="text" class="desktop_catalog_filters_item_input" @click="dropdown">
          <span class="desktop_catalog_filters_item_input-custom-label">TGC</span>
        </div>
        <div class="desktop_catalog_filters_item_dropdown">
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Unknown</label>
            <input id="unknown" type="radio" value="Unknown">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>High 15-20%</label>
            <input type="radio" value="High 15-20%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>The average 10-15%</label>
            <input type="radio" value="The average 10-15%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Very high above 20%</label>
            <input type="radio" value="Very high above 20%">
          </div>
        </div>
      </div>
      <div class="desktop_catalog_filters_item">
        <div class="desktop_catalog_filters_item_input-group">
          <input type="text" class="desktop_catalog_filters_item_input" @click="dropdown">
          <span class="desktop_catalog_filters_item_input-custom-label">TGC</span>
        </div>
        <div class="desktop_catalog_filters_item_dropdown">
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Unknown</label>
            <input type="radio" value="Unknown">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>High 15-20%</label>
            <input type="radio" value="High 15-20%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>The average 10-15%</label>
            <input type="radio" value="The average 10-15%">
          </div>
          <div class="desktop_catalog_filters_item_dropdown_checkbox_group" @click="valueSet">
            <label>Very high above 20%</label>
            <input type="radio" value="Very high above 20%">
          </div>
        </div>
      </div>
    </div>
    <div class="desktop_catalog_clean-filters">
      <button class="desktop_catalog_clean-filters_btn" @click="cleanUp">
        Clean filter
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Filter',
  methods: {
    dropdown: (event) => {
      event.target.parentElement.nextElementSibling.classList.toggle('active')
      event.target.parentElement.classList.toggle('active')
      event.target.nextElementSibling.classList.add('active')

      if (event.target.value !== '') {
        event.target.nextElementSibling.classList.remove('active')
      }
    },
    valueSet: (event) => {
      const settingValue = event.target.lastElementChild.value
      event.target.parentElement.previousElementSibling.firstElementChild.setAttribute('value', settingValue)
    },
    cleanUp: () => {
      const cleaningInputs = Array.from(document.querySelectorAll('.desktop_catalog_filters_item_input'))

      cleaningInputs.forEach((input) => {
        input.setAttribute('value', '')
        input.parentElement.nextElementSibling.classList.remove('active')
        input.parentElement.classList.remove('active')
        input.nextElementSibling.classList.remove('active')
      })
    }
  }
}
</script>
<style scoped>
.desktop_catalog_filters-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 62px;
  margin-bottom: 82px;
}

.desktop_catalog_filters {
  display: flex;
}

.desktop_catalog_filters_item {
  margin-right: 23px;
  position: relative;
}

.desktop_catalog_filters_item_input-group {
  position: relative;
  width: 152px;
}

.desktop_catalog_filters_item_input-group::before {
  content: '';
  position: absolute;
  right: 0px;
  top: 5px;
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 4px solid #ffffff;
  transition: 0.3s;
}

.desktop_catalog_filters_item_input-group.active::before {
  transform: rotate(180deg);
}

.desktop_catalog_filters_item_input {
  border: none;
  border-bottom: 2px solid #ffffff;
  background-color: transparent;
  width: 100%;
  cursor: pointer;
  padding: 0;
  position: relative;
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
}

.desktop_catalog_filters_item_input::placeholder {
  position: absolute;
  left: 0px;
  top: 0px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
  opacity: 0.8;
  transition: 0.3s;
}

.desktop_catalog_filters_item_input:focus::placeholder {
  top: -20px;
}

.desktop_catalog_filters_item_input-custom-label {
  position: absolute;
  left: 0px;
  top: 0px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
  opacity: 0.8;
  transition: 0.3s;
}

.desktop_catalog_filters_item_input-custom-label.active {
  top: -20px;
}

.desktop_catalog_filters_item_dropdown {
  opacity: 0;
  z-index: -1;
  pointer-events: none;
  background-color: #000000;
  position: absolute;
  width: 100%;
  max-height: 100px;
  transition: 0.3s;
}

.desktop_catalog_filters_item_dropdown.active {
  max-height: 250px;
  opacity: 1;
  z-index: 100;
  pointer-events: unset;
}

.desktop_catalog_filters_item_dropdown_checkbox_group {
  padding: 7px 12px;
  border-bottom: 1px solid #ffffff;
  cursor: pointer;
  transition: 0.3s;
}

.desktop_catalog_filters_item_dropdown_checkbox_group:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.desktop_catalog_filters_item_dropdown_checkbox_group:last-child {
  border: none;
}

.desktop_catalog_filters_item_dropdown_checkbox_group > label {
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  opacity: 0.8;
  cursor: pointer;
  pointer-events: none;
}

.desktop_catalog_filters_item_dropdown_checkbox_group > input {
  display: none;
}

.desktop_catalog_clean-filters_btn {
  font-family: BebasNeueBold, sans-serif;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2px;
  color: #FFFFFF;
  opacity: 0.8;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
