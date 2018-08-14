package model

// ByChapterNo implements sort.Interface for []Chapter on the ChapterNo field
type ByChapterNo []Chapter

func (c ByChapterNo) Len() int           { return len(c) }
func (c ByChapterNo) Swap(i, j int)      { c[i], c[j] = c[j], c[i] }
func (c ByChapterNo) Less(i, j int) bool { return c[i].ChapterNo < c[j].ChapterNo }
