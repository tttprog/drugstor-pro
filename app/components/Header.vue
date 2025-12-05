<template>
  <header class="z-20 border-b bg-background/90 backdrop-blur">
    <UiContainer class="flex h-16 items-center justify-between lg:h-20">
      <div class="flex items-center gap-10">
        <NuxtLink to="#" class="flex items-center gap-3">
          <span
            class="font-semibold lg:text-lg bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-[length:600%_600%] bg-clip-text text-transparent animate-gradient">آنلاین
            شاپ فارم الی</span>
        </NuxtLink>
        <UiNavigationMenu as="nav" class="hidden items-center justify-start gap-8 lg:flex">
          <UiNavigationMenuList class="gap-2">
            <UiNavigationMenuItem>
              <UiNavigationMenuLink as-child>
                <UiButton to="/" variant="ghost" size="sm"> خانه</UiButton>
              </UiNavigationMenuLink>
            </UiNavigationMenuItem>
            <template v-for="(data, link, i) in links" :key="i">
              <UiNavigationMenuItem>
                <UiNavigationMenuTrigger class="h-9 px-3 text-sm capitalize" :title="link" />
                <UiNavigationMenuContent>
                  <div class="grid grid-cols-1 gap-5 p-4 lg:w-96 lg:grid-cols-1 xl:w-96 xl:grid-cols-2" dir="rtl">
                    <div v-for="(item, cat, index) in data" :key="`${cat}-${index}`">
                      <p class="mb-5 text-sm font-semibold text-primary capitalize">{{ cat }}</p>
                      <ul class="flex w-full flex-col gap-2">
                        <li v-for="(child, k) in item" :key="k">
                          <UiNavigationMenuLink class="data-active:bg-muted/80" as-child>
                            <NuxtLink :to="child.href"
                              class="flex flex-row gap-4 rounded-md p-3 transition hover:bg-muted/80 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none">
                              <Icon :name="child.icon" class="mt-px h-5 w-5 shrink-0 text-primary" />
                              <div class="flex flex-col gap-1.5 leading-none">
                                <p class="text-sm font-semibold">{{ child.name }}</p>
                                <p class="text-sm text-muted-foreground" v-html="child.description" />
                              </div>
                            </NuxtLink>
                          </UiNavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </UiNavigationMenuContent>
              </UiNavigationMenuItem>
            </template>
            <UiNavigationMenuItem>
              <UiNavigationMenuLink as-child>
                <UiButton to="#" variant="ghost" size="sm">درباره ما</UiButton>
              </UiNavigationMenuLink>
            </UiNavigationMenuItem>
            <UiNavigationMenuItem>
              <UiNavigationMenuLink as-child>
                <UiButton to="#" variant="ghost" size="sm">تماس با ما</UiButton>
              </UiNavigationMenuLink>
            </UiNavigationMenuItem>
          </UiNavigationMenuList>
        </UiNavigationMenu>
      </div>
      <div class="lg:hidden">
        <UiSheet>
          <UiSheetTrigger as-child>
            <UiButton variant="ghost" size="icon-sm">
              <Icon name="lucide:menu" class="h-5 w-5" />
            </UiButton>
            <UiSheetContent class="w-[90%] p-0">
              <template #content>
                <UiSheetTitle class="sr-only" title="Mobile menu" />
                <UiSheetDescription class="sr-only" description="Mobile menu" />
                <UiSheetX class="z-20" />

                <UiScrollArea class="h-full p-5">
                  <div class="flex flex-col gap-2">
                    <UiButton variant="ghost" class="justify-start text-base" to="/">خانه</UiButton>
                    <template v-for="(data, link, i) in links" :key="i">
                      <UiCollapsible>
                        <UiCollapsibleTrigger as-child>
                          <UiButton variant="ghost"
                            class="w-full justify-start text-base capitalize *:data-[state=open]:-rotate-180" to="#">{{
                              link }}
                            <Icon name="lucide:chevron-down" class="ml-auto size-4 transition" />
                          </UiButton>
                        </UiCollapsibleTrigger>
                        <UiCollapsibleContent
                          class="data-[state=closed]:animate-none data-[state=open]:p-3 data-[state=open]:pt-0">
                          <div v-for="(item, cat, index) in data" :key="`${cat}-${index}`" class="mt-5">
                            <p class="mb-5 text-sm font-semibold text-primary capitalize">
                              {{ cat }}
                            </p>
                            <ul class="flex w-full flex-col gap-2">
                              <li v-for="(child, k) in item" :key="k">
                                <UiNavigationMenuLink class="data-active:bg-muted/80" as-child>
                                  <NuxtLink :to="child.href"
                                    class="flex flex-row gap-4 rounded-md p-3 transition hover:bg-muted/80 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none">
                                    <Icon :name="child.icon" class="mt-px h-5 w-5 shrink-0 text-primary" />
                                    <div class="flex flex-col gap-1.5 leading-none">
                                      <p class="text-sm font-semibold">{{ child.name }}</p>
                                    </div>
                                  </NuxtLink>
                                </UiNavigationMenuLink>
                              </li>
                            </ul>
                          </div>
                        </UiCollapsibleContent>
                      </UiCollapsible>
                    </template>
                    <UiButton variant="ghost" class="justify-start text-base" to="#">درباره ما</UiButton>
                    <UiButton variant="ghost" class="justify-start text-base" to="#">تماس با ما</UiButton>

                    <UiGradientDivider class="my-5" />

                    <ul class="grid grid-cols-2 gap-x-3 gap-y-5 px-4">
                      <li v-for="(m, j) in miniLinks" :key="j">
                        <NuxtLink class="py-2" :to="m.href">{{ m.name }}</NuxtLink>
                      </li>
                    </ul>
                    <UiGradientDivider class="my-5" />
                    <UiButton to="#" variant="ghost" size="sm">ورود </UiButton>
                    <UiButton class="relative overflow-hidden" size="lg" variant="outline">
                      ثبت نام
                      <UiBorderBeam :size="40" :initial-offset="20"
                        class="from-transparent via-yellow-500 to-transparent" :transition="{
                          type: 'spring',
                          stiffness: 60,
                          damping: 20,
                        }" />
                    </UiButton>

                  </div>
                </UiScrollArea>
                <UiSelect default-value="1" v-model="$colorMode.preference">
                  <UiSelectTrigger class="w-1/2 mx-auto">
                    <UiSelectValue />
                  </UiSelectTrigger>
                  <UiSelectContent>
                    <UiSelectItem v-for="(item, i) in colorModeOptions" :key="i" :value="item?.value">
                      {{
                        item.label
                      }}</UiSelectItem>
                  </UiSelectContent>
                </UiSelect>
              </template>
            </UiSheetContent>
          </UiSheetTrigger>
        </UiSheet>
      </div>
      <div class="hidden items-center gap-3 lg:flex">
        <UiButton to="#" variant="ghost" size="sm">ورود </UiButton>
        <UiButton class="relative overflow-hidden" size="lg" variant="outline">
          ثبت نام
          <UiBorderBeam :size="40" :initial-offset="20" class="from-transparent via-yellow-500 to-transparent"
            :transition="{
              type: 'spring',
              stiffness: 60,
              damping: 20,
            }" />
        </UiButton>
        <UiSelect default-value="1" v-model="$colorMode.preference">
          <UiSelectTrigger>
            <UiSelectValue />
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectItem v-for="(item, i) in colorModeOptions" :key="i" :value="item?.value">
              {{
                item.label
              }}</UiSelectItem>
          </UiSelectContent>
        </UiSelect>
      </div>
    </UiContainer>
  </header>

</template>

<script lang="ts" setup>
const miniLinks = [
  { name: "محصولات محبوب", href: "#" },
  { name: "اخبار و مقالات", href: "#" },
  { name: "فرصت‌های شغلی", href: "#" },
  { name: "قوانین و مقررات", href: "#" },
  { name: "پشتیبانی مشتریان", href: "#" },
  { name: "تماس با ما", href: "#" },
  { name: "نقشه سایت", href: "#" },
  { name: "تنظیمات کوکی‌ها", href: "#" },
];
const links = {
  "دسته بندی ها": {
    "صورت": [
      {
        name: "کرم مرطوب‌کننده صورت",
        description: "حفظ رطوبت پوست و جلوگیری از خشکی و چین و چروک.",
        icon: "lucide:droplet",
        href: "#",
      },
      {
        name: "ماسک صورت",
        description: "پاکسازی عمیق و تغذیه پوست با ماسک‌های طبیعی و تخصصی.",
        icon: "lucide:mask",
        href: "#",
      },
      {
        name: "ضد آفتاب",
        description: "محافظت پوست در برابر اشعه‌های UVA و UVB.",
        icon: "lucide:sun",
        href: "#",
      },
      {
        name: "سرم‌های تخصصی",
        description: "تقویت پوست و درمان مشکلات خاص مانند لک و جوش.",
        icon: "lucide:flask",
        href: "#",
      },
    ],
    "بدن": [
      {
        name: "لوسیون بدن",
        description: "مرطوب‌کننده و تغذیه‌کننده پوست بدن برای نرمی و لطافت.",
        icon: "lucide:water",
        href: "#",
      },
      {
        name: "ژل شستشو بدن",
        description: "پاکسازی و حفظ سلامت پوست با مواد ملایم.",
        icon: "lucide:bath",
        href: "#",
      },
      {
        name: "ضد تعریق",
        description: "حفظ طراوت و جلوگیری از بوی نامطبوع بدن.",
        icon: "lucide:umbrella",
        href: "#",
      },
      {
        name: "کرم دست و پا",
        description: "مراقبت و ترمیم پوست دست و پا با فرمولاسیون ویژه.",
        icon: "lucide:hand",
        href: "#",
      },
    ],
  },
  "برند ها": {
    "آلمان": [
      {
        name: "بوشه",
        description: "محصولات پوستی و بهداشتی با استانداردهای اروپایی.",
        icon: "lucide:tool",
        href: "#",
      },
      {
        name: "مرسدس اسپا",
        description: "محصولات مراقبت پوست و مکمل‌های درمانی با کیفیت بالا.",
        icon: "lucide:truck",
        href: "#",
      },
      {
        name: "زیمنس هلس",
        description: "تجهیزات و محصولات بهداشتی و درمانی معتبر.",
        icon: "lucide:settings",
        href: "#",
      },
      {
        name: "آدیداس اسپا",
        description: "محصولات ورزشی و مکمل‌های سلامت و مراقبت پوست.",
        icon: "lucide:shoe",
        href: "#",
      },
    ],
    "کانادا": [
      {
        name: "نورث فیس هلس",
        description: "مکمل‌های سلامت و مراقبت پوست با کیفیت کانادایی.",
        icon: "lucide:map",
        href: "#",
      },
      {
        name: "مونترال بیوتی",
        description: "محصولات مراقبت پوست طبیعی و ارگانیک.",
        icon: "lucide:home",
        href: "#",
      },
      {
        name: "کانادایر هلس",
        description: "تجهیزات و محصولات درمانی و مراقبتی معتبر.",
        icon: "lucide:airplay",
        href: "#",
      },
      {
        name: "لابرادور فودز سلامت",
        description: "مکمل‌ها و محصولات تغذیه‌ای برای سلامت پوست و بدن.",
        icon: "lucide:coffee",
        href: "#",
      },
    ],
  },
};


const colorModeOptions = [
  { label: "روز ☀️", value: "light" },
  { label: "شب 🌙", value: "dark" },
]
</script>
