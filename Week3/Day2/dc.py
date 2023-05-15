from math import ceil

class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.pageSize = int(pageSize)
        if pageSize < 1: self.pageSize = 1
        self.currentPage = 1
        self.totalPages = ceil(len(items) / pageSize)

    def getVisibleItems(self):
        return self.items[self.pageSize * (self.currentPage - 1):self.pageSize * self.currentPage]

    def nextPage(self):
        if self.currentPage != self.totalPages:
            self.currentPage += 1
        return self

    def prevPage(self):
        if self.currentPage != 1:
            self.currentPage -= 1
        return self

    def firstPage(self):
        self.currentPage = 1
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        if pageNum < 1: self.currentPage = 1
        elif pageNum > self.totalPages: self.currentPage = self.totalPages
        else:
            self.currentPage = int(pageNum)


alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())
# ["a", "b", "c", "d"]

p.nextPage().nextPage()

print(p.getVisibleItems())
# # ["e", "f", "g", "h"]

p.lastPage()

print(p.getVisibleItems())
# # ["y", "z"]